import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
// or

console.log({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const client = new pg.Client({
  host: process.env.HOST,
  port: process.env.PORT,
  user: 'postgres',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
await client
  .connect()
  .then(() => console.log("succesfully connecteed"))
  .catch((error) => console.log(error.message));
const db = drizzle(client);

export default db;
