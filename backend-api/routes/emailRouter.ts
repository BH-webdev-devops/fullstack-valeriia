import { Router } from "express";
import { sendEmail } from "../controllers/emailController";

const emailRouter: Router = Router();

emailRouter.get("/send-email", sendEmail);

export default emailRouter;
