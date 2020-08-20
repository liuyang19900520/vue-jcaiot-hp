import { registerAs } from '@nestjs/config';

export default registerAs('express', () => ({
  port: process.env.EXPRESS_PORT,
}));