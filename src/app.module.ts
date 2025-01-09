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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      name: 'fs_smart',
      type: 'mssql',
      host: process.env.SERVER,
      port: Number(process.env.PORT),
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
      },
      logging: true,
    }),
    TypeOrmModule.forRoot({
      name: 'dwh_ecuador',
      type: 'mssql',
      host: process.env.SERVER_DWH,
      port: Number(process.env.PORT),
      username: process.env.USERNAME_DB_DWH,
      password: process.env.PASSWORD_DWH,
      database: process.env.DATABASE_DWH,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
      },
      logging: true,
    }),
    TypeOrmModule.forRoot({
      name: 'db_log',
      type: 'mssql',
      host: process.env.SERVER,
      port: Number(process.env.PORT),
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD,
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
    // ProductModule,
    LogModule,
    InventarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
