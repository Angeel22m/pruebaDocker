import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir acceso desde el frontend
  app.enableCors({
    origin: '*', // el puerto donde corre tu frontend o '*' para permitir todos los orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }); 
  
  // Habilitar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,       // elimina campos no definidos en DTO
    forbidNonWhitelisted: true,  // error si hay campos extra
    transform: true        // convierte tipos automáticamente (ej: id string → number)
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
