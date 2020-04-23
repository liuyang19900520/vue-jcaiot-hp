import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  URI: process.env.DB_URI,
}));