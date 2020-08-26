import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpertController } from './expert.controller';
import { ExpertService } from './expert.service';
import { ExpertSchema } from './schemas/expert.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Expert', schema: ExpertSchema }])],
  controllers: [ExpertController],
  providers: [ExpertService],
})
export class ExpertModule {
}