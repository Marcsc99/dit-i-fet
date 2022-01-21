import express from 'express';
import {UserController} from '../controllers/index';

const UserRouter = express.Router();


UserRouter.get('/', UserController.findAll);
UserRouter.get('/:id', UserController.findOne);
UserRouter.post('/', UserController.createUser);
UserRouter.delete('/:id', UserController.deleteUser);
UserRouter.put('/:id', UserController.updateUser);
UserRouter.patch('/:id', UserController.updateUser);


export default UserRouter;