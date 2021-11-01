"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
class UserController {
    constructor() {
        this.userRepository = typeorm_1.getRepository(user_1.User);
    }
    all(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.find();
        });
    }
    one(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findOne(req.params.id);
        });
    }
    save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.save(req.body);
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let found = yield this.one(req, res, next);
            yield this.userRepository.remove(found);
        });
    }
}
exports.UserController = UserController;
