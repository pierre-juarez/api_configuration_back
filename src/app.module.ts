import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './modules/client/client-module';
import { ConfigurationModule } from './modules/configuration/configuration-module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './modules/product/product-module';

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
      host: process.env.SERVER,
      port: Number(process.env.PORT),
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_DWH,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
