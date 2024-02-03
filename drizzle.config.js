import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./db/schema.js",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: process.env.HOST,
    user: "postgres",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
};
