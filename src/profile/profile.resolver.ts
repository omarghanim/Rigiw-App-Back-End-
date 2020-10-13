import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserRole } from 'src/user/user.model';
import { AddProfile } from './input/profile.input';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';


@Resolver()
export class ProfileResolver {
    constructor(private readonly profileService:ProfileService){}

    @Query(returns => Profile)
    async findProfile(@Args('id') id:string):Promise<Profile>{
        return await this.profileService.findProfile(id)
    }

      
    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Query(returns => [Profile])
    async findAllProfiles(){
        return await this.profileService.findAllProfiles()
    }

    @Mutation(returns => Profile)
    async addProfile(@Args('addProfile') addProfile : AddProfile):Promise<Profile>{
        return await this.profileService.addProfile(addProfile)
    } 

    @Mutation(returns => Profile)
    async editProfile(@Args('id') id:string,@Args('editProfile') editPrfile:AddProfile):Promise<Profile>{
        return await this.profileService.editProfile(id,editPrfile)
    }

 
}
