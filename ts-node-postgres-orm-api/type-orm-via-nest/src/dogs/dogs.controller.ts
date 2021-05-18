import {Body, Controller, Get, Param, Post} from '@nestjs/common'
import {DogsDto} from "./dogs.dto";
import {DogService} from "./dogs.service";

@Controller('dogsUpdated')
export class DogsController{
    constructor(
        private readonly dogService: DogService
    ) {}

    @Get()
    getDogs(): string{
        return this.dogService.getAllDogs()
    }
    @Post()
    create(@Body() dogDto: DogsDto){
        return this.dogService.postDog(dogDto)
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.dogService.findDog()
    }
}
