import mysql from "mysql2";

const connection:mysql.Connection = mysql.createConnection({
    host: "172.17.0.1",
    user: "root",
    password: "rootpass",
    database: "mySchema",
    port: 3306,
    insecureAuth : true,
})

connection.connect((error) => {
    if(error) throw error;
    console.log("Database connection running");
})

export default connection;