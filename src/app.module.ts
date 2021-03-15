import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import TypeOrmConfig from './config/typeorm.config'

import { AuthModule } from './modules/auth/auth.module';

import { AppController } from './app.controller';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => TypeOrmConfig.getConfig(configService),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    RestaurantsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
