"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.findOne = exports.findAll = void 0;
const mysql_connection_1 = __importDefault(require("./mysql-connection"));
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT * FROM user";
    mysql_connection_1.default.query(sql, (error, results) => {
        if (error)
            throw error;
        if (results[0])
            return res.json(results);
        else
            res.send("No users found");
    });
});
exports.findAll = findAll;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const sql = `SELECT * FROM user WHERE user_id = ${id}`;
    mysql_connection_1.default.query(sql, (error, result) => {
        if (error)
            throw error;
        if (result[0])
            return res.json(result);
        else
            res.send("No users found");
    });
});
exports.findOne = findOne;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `INSERT INTO user SET ?`;
    const user = {
        name: req.body.name,
        email: req.body.email,
        pass: req.body.password
    };
    mysql_connection_1.default.query(sql, user, (error) => {
        if (error)
            throw error;
        return res.send("User Created");
    });
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const sql = `UPDATE user SET name = '${name}', email = '${email}', pass = '${pass}' WHERE user_id = ${id}`;
    mysql_connection_1.default.query(sql, (error) => {
        if (error)
            throw error;
        return res.send("User Updated");
    });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const sql = `DELETE FROM user WHERE user_id = ${id}`;
    mysql_connection_1.default.query(sql, (error) => {
        if (error)
            throw error;
        return res.send("User Deleted");
    });
});
exports.deleteUser = deleteUser;
