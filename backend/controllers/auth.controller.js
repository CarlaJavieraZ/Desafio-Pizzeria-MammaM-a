import "dotenv/config";
import jwt from "jsonwebtoken";
import { authModel } from "../models/auth.model.js";
import { v4 as uuidv4 } from 'uuid';

const create = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Faltan datos" });

  const user = await authModel.getUserByEmail(email);
  if (user) {
    return res.status(400).json({ error: "Usuario ya registrado" });
  }

  const newUser = { email, password, id: uuidv4() };
  await authModel.addUser(newUser);

  const payload = { email, id: newUser.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return res.json({ email, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await authModel.getUserByEmail(email, password);

  if (!user) return res.status(400).json({ error: "Credenciales inválidas" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.json({ message: "Login exitoso", token, email: user.email });
};

const getProfile = async (req, res) => {
  const { email } = req.user;
  const user = await authModel.getUserByEmail(email);

  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  return res.json({ email, id: user.id });
};

export const authController = { create, login, getProfile };
