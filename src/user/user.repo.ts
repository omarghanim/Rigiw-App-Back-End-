import { Injectable } from "@nestjs/common";
import { Includeable, WhereOptions } from "sequelize/types";
import { AuthService } from "src/auth/auth.service";
import { Business } from "src/business/business.model";
import { Profile } from "src/profile/profile.model";
import { User } from "./user.model";

@Injectable()
export class UserRepository{
    async findUser(where:WhereOptions={},include:Includeable[]=[]){
        return await User.findOne({where,include})
        
    }

    async findAllUsers(where:WhereOptions={},include:Includeable[]=[]){
        return await User.findAll({where,include})
    }
    async createUser(newUser){
        return await User.create(newUser,{include:[Profile,Business]})
    }
   
}