import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ClientModule,
  ConfigurationModule,
  AuthModule,
  ProductModule,
  LogModule,
  InventarioModule,
} from './modules/modules';
import { DATABASE_CNX } from './constants/constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      name: DATABASE_CNX.SMART,
      type: 'mssql',
      host: process.env.SERVER_HOST,
      port: Number(process.env.PORT_SQL),
      username: process.env.USERNAME_HOST,
      password: process.env.PASSWORD_HOST,
      database: process.env.DATABASE_SMART,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
      },
      logging: true,
    }),
    TypeOrmModule.forRoot({
      name: DATABASE_CNX.PASSARELADWH,
      type: 'mssql',
      host: process.env.SERVER_HOST,
      port: Number(process.env.PORT_SQL),
      username: process.env.USERNAME_HOST,
      password: process.env.PASSWORD_HOST,
      database: process.env.DATABASE_PE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
      },
      logging: true,
    }),
    TypeOrmModule.forRoot({
      name: DATABASE_CNX.ECUADORDWH,
      type: 'mssql',
      host: process.env.SERVER_HOST,
      port: Number(process.env.PORT_SQL),
      username: process.env.USERNAME_HOST,
      password: process.env.PASSWORD_HOST,
      database: process.env.DATABASE_EC,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
      },
      logging: true,
    }),
    TypeOrmModule.forRoot({
      name: DATABASE_CNX.LOG,
      type: 'mssql',
      host: process.env.SERVER_HOST,
      port: Number(process.env.PORT_SQL),
      username: process.env.USERNAME_HOST,
      password: process.env.PASSWORD_HOST,
      database: process.env.DATABASE_LOG,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
      },
      logging: true,
    }),

    AuthModule,
    ClientModule,
    ConfigurationModule,
    ProductModule,
    LogModule,
    InventarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
