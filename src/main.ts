import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina cualquier propiedad que no este esperando en nuetro DTO
      forbidNonWhitelisted: true, // Lanza un error al detectar esos datos que no espera nuestro DTO
      transformOptions: { exposeUnsetFields: false,}, // Excluye los campos undefined
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
