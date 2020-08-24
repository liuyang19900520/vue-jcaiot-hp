import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssociationController } from './association.controller';
import { AssociationService } from './association.service';
import { AssociationSchema } from './schemas/association.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Association', schema: AssociationSchema }])],
  controllers: [AssociationController],
  providers: [AssociationService],
})
export class AssociationModule {
}