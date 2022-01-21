"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../controllers/index");
const UserRouter = express_1.default.Router();
UserRouter.get('/', index_1.UserController.findAll);
UserRouter.get('/:id', index_1.UserController.findOne);
UserRouter.post('/', index_1.UserController.createUser);
UserRouter.delete('/:id', index_1.UserController.deleteUser);
UserRouter.put('/:id', index_1.UserController.updateUser);
UserRouter.patch('/:id', index_1.UserController.updateUser);
exports.default = UserRouter;
