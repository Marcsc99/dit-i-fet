import express from 'express';
import connection from "./mysql-connection";


const findAll:express.RequestHandler = async (req: express.Request, res: express.Response) => {
    const sql:string ="SELECT * FROM user";
    connection.query(sql, (error:Error, results:Array<Object>) => {
        if(error) throw error;
        if(results[0]) return res.json(results);
        else res.send("No users found");
    });
};

const findOne:express.RequestHandler = async (req: express.Request, res: express.Response) => {
    const id:string = req.params.id;
    const sql:string = `SELECT * FROM user WHERE user_id = ${id}`;
    connection.query(sql, (error:Error, result:Array<Object>) => {
        if(error) throw error;
        if(result[0]) return res.json(result);
        else res.send("No users found");
    });
};

const createUser:express.RequestHandler = async (req: express.Request, res: express.Response) => {
    const sql:string = `INSERT INTO user SET ?`;

    const user:object = {
        name:req.body.name,
        email:req.body.email,
        pass:req.body.password
    }

    connection.query(sql, user, (error)=> {
        if(error) throw error;
        return res.send("User Created");
    });
};

const updateUser:express.RequestHandler = async (req: express.Request, res: express.Response) => {
    const id:string = req.params.id;
    const name:string = req.body.name;
    const email:string = req.body.email;
    const pass:string = req.body.pass;

    const sql:string = `UPDATE user SET name = '${name}', email = '${email}', pass = '${pass}' WHERE user_id = ${id}`;

    connection.query(sql, (error:Error)=> {
        if(error) throw error;
        return res.send("User Updated");
    });
};

const deleteUser:express.RequestHandler = async (req: express.Request, res: express.Response) => {
    const id:string = req.params.id;
    const sql:string = `DELETE FROM user WHERE user_id = ${id}`;

    connection.query(sql, (error:Error)=> {
        if(error) throw error;
        return res.send("User Deleted");
    });
};

export {
    findAll, findOne, createUser,updateUser, deleteUser
}