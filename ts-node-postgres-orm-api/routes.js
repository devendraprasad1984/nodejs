"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const userController_1 = require("./controllers/userController");
exports.Routes = [
    { method: 'get', route: '/users', controller: userController_1.UserController, action: 'all' },
    { method: 'get', route: '/users/:id', controller: userController_1.UserController, action: 'one' },
    { method: 'post', route: '/users', controller: userController_1.UserController, action: 'save' },
    { method: 'delete', route: '/users/:id', controller: userController_1.UserController, action: 'remove' },
];
