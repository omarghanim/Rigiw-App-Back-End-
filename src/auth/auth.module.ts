import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './guards/jwt.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
    imports: [
      UserModule,
      PassportModule.register({defaultStrategy:'jwt'}),
      JwtModule.register({
        secret: 'secret',
        signOptions: { expiresIn: '60s' },
      }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
  })
  export class AuthModule {}
  