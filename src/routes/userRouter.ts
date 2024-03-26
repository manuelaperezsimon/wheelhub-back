import express from "express";
import createUser from "../server/controllers/users/usersController";

const usersRouter = express.Router();

usersRouter.post("/create", createUser);

export default usersRouter;
