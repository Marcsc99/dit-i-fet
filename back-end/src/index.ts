import express from 'express';
import connection from "./mysql-connection";
import cors from "cors";

const app:express.Application = express();
const PORT:number = 3001;

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
    }));

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello world");
})