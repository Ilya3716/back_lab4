import express from "express";
import userRoutes from "./users/UserRoutes";
import authRoutes from "./auth/AuthRouters";
import { auth } from "../middlewares/auth";

const router: express.Router = express.Router();

router.use("/users", auth, userRoutes);
router.use("/", authRoutes);
router.get("/getUser", auth, (req: any, res: any) => {
  res.setHeader("User-Id", req.user.id);
  console.log("authorized:", req.user.id);
  res.sendStatus(200);
});
export default router;
