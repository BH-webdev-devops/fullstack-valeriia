import { getUserProfile } from "./../controllers/userController";
import { checkToken } from "./../middlewares/checkToken";
import { Router } from "express";

const userRouter: Router = Router();

userRouter.get("/profile", checkToken, getUserProfile);

export default userRouter;
