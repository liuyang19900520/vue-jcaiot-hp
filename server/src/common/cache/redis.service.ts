import { Inject } from '@nestjs/common';
import { RedisService as CommonRedisService } from 'nestjs-redis';
import { isNull } from 'lodash';
import { Redis } from 'ioredis';

// import { AppEnvironment } from '@app/common/enum/app-environment';
// import { ConfigService } from '@app/config/config.service';
// import { serviceTokens } from '@app/common/service.tokens';
// import { ConfigNames } from '@app/config/enum/config-names';

export class RedisService {
    constructor(
        private readonly commonRedisService: CommonRedisService,
        // @Inject(serviceTokens.ConfigService)
        // private readonly config: ConfigService,
    ) { }

    public getClient(): Redis {
        return this.commonRedisService.getClient();
    }

    public async resolve<T>(key: string, getFromOriginalSource: () => Promise<T>, lifetime?: number): Promise<T> {
        // if (this.config.get(ConfigNames.NODE_ENV) === AppEnvironment.DEVELOPMENT) {
        //     return getFromOriginalSource();
        // }

        const cached = await this.getClient().get(key);

        if (isNull(cached)) {
            const objFromOriginalSource = await getFromOriginalSource();

            if (isFinite(lifetime)) {
                await this.getClient().set(key, JSON.stringify(objFromOriginalSource), 'EX', lifetime);
            } else {
                await this.getClient().set(key, JSON.stringify(objFromOriginalSource));
            }

            return objFromOriginalSource;
        }

        return JSON.parse(cached);
    }
}