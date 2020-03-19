import { Module } from '@nestjs/common';

import { serviceTokens } from '@app/common/service.tokens';
import { RedisService } from '@app/cache/redis.service';

@Module({
    providers: [{
        provide: serviceTokens.RedisService,
        useClass: RedisService,
    }],
    exports: [
        serviceTokens.RedisService,
    ],
})
export class CacheModule { }
