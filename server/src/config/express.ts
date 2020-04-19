export default {
  environment: process.env.NODE_ENV,
  port: process.env.EXPRESS_PORT,

  // helpers
  isProduction() {
    return this.get('express.environment') === 'production';
  },
};