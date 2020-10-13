import { Injectable } from '@nestjs/common';
import { profile } from 'console';
import { User } from 'src/user/user.model';
import { AddProfile} from './input/profile.input';
import { Profile } from './profile.model';
import { ProfileRepository } from './profile.repo';

@Injectable()
export class ProfileService {
        constructor(private readonly profileRepo:ProfileRepository){}

        async findProfile(id):Promise<Profile>{
            return await this.profileRepo.findProfile({id:id},[User])
        }

        async findAllProfiles():Promise<Profile[]>{
            return await this.profileRepo.findAllProfiles({},[User])
        }

        async addProfile(addProfile:AddProfile):Promise<Profile>{
            const profile = await this.profileRepo.addProfile({...addProfile})
            return this.findProfile(profile.id)
        }

        async editProfile(id:string,editProfile:AddProfile):Promise<Profile>{
           return await this.profileRepo.editProfile({id:id,...editProfile},[User])
           
        }

      
}
