import express from 'express';
import {UserController} from '../controllers/index';

const UserRouter = express.Router();


UserRouter.get('/', UserController.findAll);


export default UserRouter;