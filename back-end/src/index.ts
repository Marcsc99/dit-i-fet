import express from 'express';
import {dbconnection} from "./mysql-connection"

const app:express.Application = express();
const PORT:number = 3001;

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));