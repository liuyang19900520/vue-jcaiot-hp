import { registerAs } from '@nestjs/config';

export default registerAs('express', () => ({
  port: process.env.EXPRESS_PORT,
  debugPath: process.env.DEBUG_LOG_PATH,
  infoPath: process.env.INFO_LOG_PATH,
  warnPath: process.env.WARN_LOG_PATH,
  errorPath: process.env.ERROR_LOG_PATH,
}));