import { UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileInterceptor } from '@nestjs/platform-express';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserRole } from 'src/user/user.model';
import { Business } from './business.model';
import { BusinessService } from './business.service';
import { BusinessProfile } from './input/create-business.input';

@Resolver()
export class BusinessResolver {

    constructor(private readonly businessService:BusinessService){}

    @Query(returns => Business)
    async findBusiness(@Args('id') id:string):Promise<Business>{
        return await this.businessService.findBusiness(id)
    }

      
    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Query(returns => [Business])
    async findAll(){
        return await this.businessService.findAll()
    }

    @Mutation(returns => Business)
    @UseInterceptors(FileInterceptor('file'))
    async createBusiness(@UploadedFile() file, @Args('businessProfile') businessProfile:BusinessProfile):Promise<Business>{
        return await this.businessService.createBusiness(businessProfile);
        }
    }


