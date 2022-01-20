import mysql from "mysql";

const connection:mysql.Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpass",
    database: "mysql",
})

connection.connect((error:Error) => {
    if(error) throw error;
    console.log("Database connection running");
})

export default connection;
