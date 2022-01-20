import express from 'express';

const findAll:express.RequestHandler = async (req: express.Request, res: express.Response) => {
    console.log("FUNCIONAAA");
    return res.send("Find all");
};

export {
    findAll,
}