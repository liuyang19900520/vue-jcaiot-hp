import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { ApplicationSchema } from './schemas/application.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Application', schema: ApplicationSchema }])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationUserModule {
}