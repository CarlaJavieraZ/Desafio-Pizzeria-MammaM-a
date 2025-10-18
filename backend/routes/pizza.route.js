import { Router } from "express";
import { pizzaController } from "../controllers/pizza.controller.js";

const router = Router();

router.get("/read", pizzaController.readPizzas);
router.get("/:id", pizzaController.readPizza);
router.get("/", pizzaController.pizzaFile);

export default router;
