import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pizzaModel } from "../models/pizza.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname,"..", "db/pizzas.json");


const readPizzas = async (req, res) => {
  const pizzas = await pizzaModel.getPizzas();
  res.json(pizzas);
};

const readPizza = async (req, res) => {
  const { id } = req.params;
  const pizza = await pizzaModel.getPizza(id.toLowerCase());
  if (!pizza) {
    return res.status(404).json({ message: "Pizza not found" });
  }
  res.json(pizza);
};

const pizzaFile = async (req, res) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const pizzas = JSON.parse(data);
    res.json(pizzas);
  } catch (error) {
    console.error("Error al leer pizzas.json:", error.message);
    res.status(500).json({ error: "Error al leer el archivo de pizzas" });
  }
}

export const pizzaController = {
  readPizzas,
  readPizza,
  pizzaFile
};
