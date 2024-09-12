import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включение CORS
  app.enableCors({
    origin: '*', // Убедитесь, что это соответствует вашим требованиям безопасности
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false, // Убедитесь, что это необходимо
  });

  // Убедитесь, что папка 'public' существует и содержит статические файлы
  app.use(express.static('public'));

  // Настройка порта и запуск сервера
  const port = 3000; // Можно использовать переменные окружения для портов
  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}

bootstrap();
