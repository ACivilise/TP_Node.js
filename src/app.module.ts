import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Controllers
import { HomeController } from './controllers/home/home.controller';

// Services
import { CatsService } from './services/cats.service';

@Module({
  imports: [],
  controllers: [AppController, HomeController],
  providers: [AppService, CatsService],
})
export class AppModule{}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes(HomeController);
//   }
// }