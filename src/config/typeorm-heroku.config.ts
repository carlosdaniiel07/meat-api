import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import { Auth } from "src/modules/auth/auth.entity";
import { Restaurant } from "src/modules/restaurants/restaurant.entity";

const getConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: configService.get<string>('DATABASE_URL'),
  entities: [
    Auth,
    Restaurant,
  ],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: configService.get<string>('NODE_ENV') === 'dev' ? ['query'] : [],
})

export default {
  getConfig,
}