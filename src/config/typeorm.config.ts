import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import { Auth } from "src/modules/auth/auth.entity";
import { Restaurant } from "src/modules/restaurants/restaurant.entity";

const getConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('APP_DATABASE_HOST'),
  port: configService.get<number>('APP_DATABASE_PORT'),
  username: configService.get<string>('APP_DATABASE_USER'),
  password: configService.get<string>('APP_DATABASE_PASSWORD'),
  database: configService.get<string>('APP_DATABASE_NAME'),
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