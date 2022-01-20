import express from 'express';

interface UserControllerInterface{
    findAll: express.RequestHandler;
}

const UserController: UserControllerInterface = {
 findAll: 
    () => {
     (req:express.Request, res: express.Response) => { res.send("Find all"); }
    }  
};
export default UserController;