import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Cats2Controller } from './cats2/cats2.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, Cats2Controller],
  providers: [AppService],
})
export class AppModule {}
