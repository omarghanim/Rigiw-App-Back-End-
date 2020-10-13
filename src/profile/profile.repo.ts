import { Injectable } from "@nestjs/common";
import { Includeable, WhereOptions } from "sequelize/types";
import { User } from "src/user/user.model";
import { AddProfile} from "./input/profile.input";
import { Profile } from "./profile.model";

@Injectable()
export class ProfileRepository{

    async findProfile(where:WhereOptions={},include:Includeable[]=[]){
        return await Profile.findOne({where,include})
    }
    
    async findAllProfiles(where:WhereOptions={},include:Includeable[]=[]){
        return await Profile.findAll({where,include})
    }

    async addProfile(addProfile:AddProfile):Promise<Profile>{
        return await Profile.create(addProfile,{include:[User]})
    }

    async editProfile(id,editProfile):Promise<Profile>{
        return await Profile.findOne(editProfile.id).then(profile => profile.update({...editProfile}))
    }

    
}