import { migrate } from "drizzle-orm/mysql2/migrator";
import db from "./db.js";

async function migrateData() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  process.exit(0);
}

migrateData().catch((err) => console.log(err.message));
