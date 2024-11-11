import { checkUserData } from "./../middlewares/checkUserData";
import { checkIfUserExist } from "./../middlewares/checkUser";
import { registerUser, loginUser } from "./../controllers/authController";
import { Router } from "express";
import { upload } from "../middlewares/uploadFile";

const authRouter: Router = Router();

authRouter.post(
  "/register",
  upload.single("image"),
  checkUserData(true),
  checkIfUserExist(false),
  registerUser
);
authRouter.post(
  "/login",
  checkUserData(false),
  checkIfUserExist(true),
  loginUser
);

export default authRouter;
