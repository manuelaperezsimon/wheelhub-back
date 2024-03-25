import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import Debug from "debug";
import chalk from "chalk";

const debug = Debug("wheelHub:database:index");

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export const connectDB = async () => {
  try {
    AppDataSource.initialize();
    debug(chalk.blue("Connected to database"));
  } catch (err) {
    debug(chalk.red("Error connecting to database", err.message));
  }
};
