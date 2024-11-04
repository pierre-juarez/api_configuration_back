import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  // Auth API
  app.use(
    ['/api'],
    basicAuth({ challenge: true, users: { admin: process.env.PASSWORD_AUTH } }),
  );

  const configSwagger = new DocumentBuilder()
    .setTitle('API SmartFooloose')
    .setDescription('API for the SmartFootloose backend')
    .setVersion('1.0.0')
    .addBasicAuth({ type: 'http', scheme: 'basic' }, 'basic-auth')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('/api', app, document);

  await app.listen(process.env.PORT_HOST);
}
bootstrap();
