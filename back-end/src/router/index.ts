import express from 'express';
import UserRouter from './userRouter';

const appRouter = express.Router();

appRouter.use('/users', UserRouter);

export {
    appRouter,
} 