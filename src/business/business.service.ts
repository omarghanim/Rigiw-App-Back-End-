import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.model';
import { Business } from './business.model';
import { BusinessRepository } from './business.repo';
import { BusinessProfile } from './input/create-business.input';

@Injectable()
export class BusinessService {
    constructor(private readonly businessRepo:BusinessRepository){}

    async findBusiness(id):Promise<Business>{
        return await this.businessRepo.findBusiness({ id: id },[User])
    }

    async findAll():Promise<Business[]>{
        return await this.businessRepo.findAll({},[User])
    }

    async createBusiness(businessProfile:BusinessProfile):Promise<Business>{
        const profile =await this.businessRepo.createBusiness({...businessProfile})
        return this.findBusiness(profile.id);

    }
}
