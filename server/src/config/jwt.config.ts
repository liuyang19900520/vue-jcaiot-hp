import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secretKey: process.env.JWT_SECRET,
  saltRounds: process.env.SALT_ROUNDS,
  expiredSeconds: process.env.JWT_EXPIRED,
}));