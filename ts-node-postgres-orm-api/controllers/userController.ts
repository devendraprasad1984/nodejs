import {getRepository} from "typeorm";
import {User} from "../entity/user";

export class UserController{
    private userRepository = getRepository(User)

    async all(req, res, next) {
        return this.userRepository.find()
    }
    async one(req, res, next) {
        return this.userRepository.findOne(req.params.id)
    }
    async save(req, res, next){
        return this.userRepository.save(req.body)
    }
    async remove(req, res, next) {
        let found=await this.one(req, res, next)
        await this.userRepository.remove(found)
    }
}
