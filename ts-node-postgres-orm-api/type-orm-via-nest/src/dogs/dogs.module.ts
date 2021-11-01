import { Module } from '@nestjs/common';
import {DogsController} from "./dogs.controller";
import {DogService} from "./dogs.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dog} from "./dogs.entity";
import {DogsRepository} from "./dogs.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Dog, DogsRepository])],
    controllers: [DogsController],
    providers: [DogService],
})
export class DogsModule {}
