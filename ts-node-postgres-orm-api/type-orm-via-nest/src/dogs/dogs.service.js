"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dogs_repository_1 = require("./dogs.repository");
let DogService = class DogService {
    constructor(dogRepository) {
        this.dogRepository = dogRepository;
    }
    getAllDogs() {
        return 'All Dogs are here';
    }
    postDog(dto) {
        return this.dogRepository.createDog(dto).then(d => {
            return 'created - ' + JSON.stringify(d);
        });
    }
    findDog() {
        return 'dog found';
    }
};
DogService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(dogs_repository_1.DogsRepository)),
    __metadata("design:paramtypes", [dogs_repository_1.DogsRepository])
], DogService);
exports.DogService = DogService;
