import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DogsModule} from "./dogs/dogs.module";
import {TypeOrmModule} from "@nestjs/typeorm"

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      DogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
