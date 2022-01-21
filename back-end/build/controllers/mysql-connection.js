"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const connection = mysql2_1.default.createConnection({
    host: "172.17.0.1",
    user: "root",
    password: "rootpass",
    database: "mySchema",
    port: 3306,
    insecureAuth: true,
});
connection.connect((error) => {
    if (error)
        throw error;
    console.log("Database connection running");
});
exports.default = connection;
