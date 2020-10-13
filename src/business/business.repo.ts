import { Injectable } from "@nestjs/common";
import { Includeable, WhereOptions } from "sequelize/types";
import { User } from "src/user/user.model";
import { Business } from "./business.model";

@Injectable()
export class BusinessRepository{

    async findBusiness(where:WhereOptions={},include:Includeable[]=[]){
        return await Business.findOne({where,include})
    }
    
    async findAll(where:WhereOptions={},include:Includeable[]=[]){
        return await Business.findAll({where,include})
    }

    async createBusiness(businessProfile):Promise<Business>{
        return await Business.create(businessProfile,{include:[User]})
    }
    
}