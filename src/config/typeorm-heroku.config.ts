import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { entities } from './entities';

const getConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: configService.get<string>('DATABASE_URL'),
  entities,
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: configService.get<string>('NODE_ENV') === 'dev' ? ['query'] : [],
});

export default {
  getConfig,
};
