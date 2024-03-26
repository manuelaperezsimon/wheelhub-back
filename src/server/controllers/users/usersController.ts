import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../../database/data-source";
import { User } from "../../../entity/User";
import { IUser } from "../../../interfaces/interfaces";
import { hashCreator } from "../../../utils/crypto";

const userRepository = AppDataSource.getRepository(User);

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  user.password = await hashCreator(user.password);

  try {
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = user.password;
    await userRepository.save(newUser);

    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ msg: "Error creating user" });
    next(error);
  }
};

export default createUser;
