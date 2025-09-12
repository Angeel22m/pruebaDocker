import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir acceso desde el frontend
  app.enableCors({
    origin: 'http://localhost:8080', // el puerto donde corre tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }); 
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
