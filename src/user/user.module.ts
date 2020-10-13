import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repo';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { ProfileModule } from 'src/profile/profile.module';
import { BusinessModule } from 'src/business/business.module';
import { AuthGuard } from 'src/auth/guards/authGuard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[ProfileModule,BusinessModule,forwardRef(()=>AuthModule)],
  providers: [UserService, UserResolver,UserRepository],
  exports:[UserService]
})
export class UserModule {}
