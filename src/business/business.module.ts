import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessResolver } from './business.resolver';
import { BusinessRepository } from './business.repo';

@Module({
  providers: [BusinessService, BusinessResolver,BusinessRepository],
  exports:[BusinessService]
})
export class BusinessModule {}
