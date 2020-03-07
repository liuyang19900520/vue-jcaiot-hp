import { Module } from '@nestjs/common';
import { Model } from 'mongoose';
import { SecretKeysComponent } from './secretKeys.service';
@Module({
    providers: [SecretKeysComponent],
    exports: [SecretKeysComponent]
})
export class CommonModule {

}
