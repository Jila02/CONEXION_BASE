import pg from "pg";
import { DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,DB_USER } from "./config";

export const pool= new pg.Pool({
    host: DB_HOST,
    port:DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password:DB_PASSWORD
}
);
