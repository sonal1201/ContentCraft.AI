import express from "express"
import { auth } from "../middlewares/auth";
import { getUserCreations } from "../controllers/userController";

const userRoute = express.Router();


userRoute.get('/get-user-creation',auth,getUserCreations);


export default userRoute;