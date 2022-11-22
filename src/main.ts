import { port } from '../config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);

  await app.listen(port, () => console.log(`Server started on port = ${port}`))
}

start();
