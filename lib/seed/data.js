import db from "../db/connection.js";
import Country from "../models/Country.js";
import countryData from "./countries.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset DB
  await db.dropDatabase();

  // Insert Data
  await Country.create(countriesData);

  console.log(chalk.greenBright("Countries created!"));

  // Close DB Connection
  await db.close();
};

insertData();
