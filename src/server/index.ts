import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import usersRouter from "../routes/userRouter";
import swaggerSpecifications from "../swagger";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecifications));

export default app;
