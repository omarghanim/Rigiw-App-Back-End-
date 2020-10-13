import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { BusinessModule } from './business/business.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [GraphQLModule.forRoot({
    installSubscriptionHandlers:true,
    autoSchemaFile:'src/schema.gql',
    context: ({ req }) => ({ headers: req.headers }),
  }),
    UserModule,
    BusinessModule,
    DatabaseModule,
    ProfileModule,
    AuthModule,
    ],
})
export class AppModule {}
