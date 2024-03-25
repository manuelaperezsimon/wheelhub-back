import express from "express";
import morgan from "morgan";
import "reflect-metadata";
import { User } from "../entity/User";

const app = express();
app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

export default app;
