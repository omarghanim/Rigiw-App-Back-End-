import { Module } from '@nestjs/common';
import { User } from 'src/user/user.model';
import { ProfileRepository } from './profile.repo';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';

@Module({imports:[],
  providers: [ProfileResolver, ProfileService,ProfileRepository],
  exports:[ProfileService]
})
export class ProfileModule {}
