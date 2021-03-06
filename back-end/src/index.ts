import express from 'express';
import cors from "cors";
import {appRouter} from "./router/index"

const app:express.Application = express();
const PORT:number = 3050;

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
    }));

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use("/", appRouter);

// app.get('/', (req: express.Request, res: express.Response) => {
//     res.send("Hello world");
// })