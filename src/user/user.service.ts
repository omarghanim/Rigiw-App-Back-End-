import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { UserRepository } from './user.repo';
//import  {sign} from 'jsonwebtoken'
import { NewUser } from './input/create-user.input';
import * as bcrypt from 'bcrypt'
import { LoginUser } from './input/login-user.input';
import * as jwt from 'jsonwebtoken'
import { response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'src/profile/profile.model';
import { Business } from 'src/business/business.model';
import { AuthGuard } from 'src/auth/guards/authGuard';
import {map} from 'rxjs/operators'



@Injectable()
export class UserService {
    constructor(private readonly userRepo:UserRepository, private readonly authService:AuthService){}
    


        async findUser(id):Promise<User>{
            return await this.userRepo.findUser({id:id},[Profile,Business])
            

        }

        async findAllUsers():Promise<User[]>{
            return await this.userRepo.findAllUsers({},[Profile,Business])
        }

        async createUser(newUser:NewUser):Promise<User>{
            const hashedPassword = await bcrypt.hash(newUser.password,10)
            const user = await this.userRepo.createUser({...newUser,password:hashedPassword})
            return this.findUser(user.id)

        }

        async login(loginUser:LoginUser){
            const login = await this.userRepo.findUser({email:loginUser.email})
            if(!login){
                return null;
            }
    
            const valid = await bcrypt.compare(loginUser.password,login.password)
            if(!valid){
                return null ;
            }

          login.pipe(map((jwt:string)=>{
              {access_token:jwt}
         }));
         return this.authService.generateJWT(login.id).pipe(map((jwt:string)=> jwt))   
        }
     
}
