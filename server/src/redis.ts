
const redisStore = require('cache-manager/examples/redis_example/redis_store');  //商店引擎
const cacheManager = require('cache-manager').caching({ store: redisStore, db: 0, ttl: 100 });
export { cacheManager };
