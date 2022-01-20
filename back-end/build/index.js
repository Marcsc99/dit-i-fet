"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./router/index");
const app = (0, express_1.default)();
const PORT = 3050;
app.use((0, cors_1.default)({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use(express_1.default.json());
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
app.use("/", index_1.appRouter);
// app.get('/', (req: express.Request, res: express.Response) => {
//     res.send("Hello world");
// })
