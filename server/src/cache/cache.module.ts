import { Module } from '@nestjs/common';

import { serviceTokens } from '../common/service.tokens';
import { RedisService } from '../cache/redis.service';

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
