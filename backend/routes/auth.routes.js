import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", authController.create);
router.post("/login", authController.login);
router.get("/me", authMiddleware, authController.getProfile);

export default router;
