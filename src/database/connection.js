import { createConnection } from "mysql";
import dotenv from "dotenv";
dotenv.config();
//Configuración de la conexión

const connection = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPW,
    database: process.env.DB,
});

export { connection };
