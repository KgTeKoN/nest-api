import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function start() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = config.get<number>('PORT');
  console.log(config.get<string>('TYPEORM_USERNAME'));
  await app.listen(port || 5000, () => console.log(`Server started on port = ${port}`));
}

start();
