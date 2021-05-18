"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsModule = void 0;
const common_1 = require("@nestjs/common");
const dogs_controller_1 = require("./dogs.controller");
const dogs_service_1 = require("./dogs.service");
const typeorm_1 = require("@nestjs/typeorm");
const dogs_entity_1 = require("./dogs.entity");
const dogs_repository_1 = require("./dogs.repository");
let DogsModule = class DogsModule {
};
DogsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([dogs_entity_1.Dog, dogs_repository_1.DogsRepository])],
        controllers: [dogs_controller_1.DogsController],
        providers: [dogs_service_1.DogService],
    })
], DogsModule);
exports.DogsModule = DogsModule;
