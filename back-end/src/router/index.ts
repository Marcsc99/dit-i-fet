import express from 'express';
import UserRouter from './userRouter';

const appRouter:express.Router = express.Router();

appRouter.use('/users', UserRouter);

export default appRouter;