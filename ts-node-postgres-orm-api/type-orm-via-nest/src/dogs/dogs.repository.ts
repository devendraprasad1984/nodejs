import {Dog} from "./dogs.entity";
import {EntityRepository, Repository} from "typeorm";
import {DogsDto} from "./dogs.dto";

@EntityRepository(Dog)
export class DogsRepository extends Repository<Dog> {
    createDog = async (dogDto: DogsDto) => {
        return await this.save(dogDto)
    }
}
