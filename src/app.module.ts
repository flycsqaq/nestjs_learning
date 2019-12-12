import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoginMiddleware, logger } from './middleware/login.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule], // 模块间的providers共享
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoginMiddleware).forRoutes({path: 'cats', method: RequestMethod.GET});
    consumer.apply(logger).forRoutes(CatsController);
  }
}
