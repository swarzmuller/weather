import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://swarzmuller.github.io', // Replace with your frontend domain
    methods: 'GET,POST,PUT,DELETE', // Specify allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
    credentials: true, // Enable if cookies or authorization headers are required
  });
  await app.listen(process.env.PORT ?? 3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

export default server;
