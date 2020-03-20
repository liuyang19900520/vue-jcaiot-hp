import { ConfigNames } from '../config/enum/config-names';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    this.envConfig = process.env;
  }

  get(key: ConfigNames): string {
    return this.envConfig[key];
  }
}
