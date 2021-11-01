import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import  {DogsRepository} from './dogs.repository';
import {DogsDto} from "./dogs.dto";
import {json} from "express";

@Injectable()
export class DogService {
    constructor(
        @InjectRepository(DogsRepository) private readonly dogRepository: DogsRepository
    ) {}


    getAllDogs(): string {
        return 'All Dogs are here';
    }
    postDog(dto: DogsDto): any {
        return this.dogRepository.createDog(dto).then(d=>{
            return 'created - '+JSON.stringify(d)
        });
    }
    findDog(): string {
        return 'dog found';
    }
}
