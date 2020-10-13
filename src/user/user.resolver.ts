import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UserRole } from './user.model';
import { UserService } from './user.service';
import {NewUser} from './input/create-user.input'
import { LoginUser } from './input/login-user.input';
import { Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
//import { RolesGuard } from 'src/auth/guards/roles.guard';
import { User as CurrentUser } from './user.decorator';
import { LocalAuthGuard } from 'src/auth/guards/local-guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import {map} from 'rxjs/operators'
import { RolesGuard } from 'src/auth/guards/roles.guard';





@Resolver()
export class UserResolver {
    constructor(private readonly userService:UserService){}


    @Query(returns => User)
        async findUser(@Args('id') id:string):Promise<User>{
            return await this.userService.findUser(id)
        }
    
    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Query(returns => [User])
        async findAllUsers()  //@CurrentUser() user:User
        {
            return await this.userService.findAllUsers()
        }
        

    @Mutation(returns => User)
        async createUser(@Args('newUser') newUser:NewUser):Promise<User>{
           return await this.userService.createUser(newUser)
        }

        @Mutation(returns => User)
        async login(@Args('loginUser') loginUser:LoginUser){
          return await (await this.userService.login(loginUser)).pipe(map((jwt:string)=> {access_token:jwt}))      
        }
}
