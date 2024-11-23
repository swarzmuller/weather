import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as serverlessHttp from 'serverless-http';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors({
    origin: 'https://swarzmuller-github-io.onrender.com',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  });
  await app.init(); // Initialize the app without starting the listener
  // await app.listen(process.env.PORT ?? 3001);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Application initialized`);
}

bootstrap();

// Export the serverless handler
export const handler = serverlessHttp(server);
