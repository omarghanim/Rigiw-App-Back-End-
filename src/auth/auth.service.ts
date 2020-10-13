import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from, Observable } from 'rxjs';
import { User } from 'src/user/user.model';
import * as bcrypt from 'bcrypt'
import { LoginUser } from 'src/user/input/login-user.input';


 @Injectable()
export class AuthService {
    constructor(private readonly jwtService:JwtService){}

    generateJWT(login) {
        return from(this.jwtService.signAsync({login}))
    }
 

}


