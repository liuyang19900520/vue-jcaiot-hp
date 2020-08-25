import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnterpriseController } from './enterprise.controller';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseSchema } from './schemas/enterprise.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Enterprise', schema: EnterpriseSchema }])],
  controllers: [EnterpriseController],
  providers: [EnterpriseService],
})
export class EnterpriseModule {
}