import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(); // 全局中间件
  // app.useGlobalFilters() // 全局过滤器
  await app.listen(3000);
}
bootstrap();
