

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import checkoutRoutes from "./routes/checkout.routes.js";
import pizzasFile from "./routes/pizza.route.js"


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/pizzas", pizzasFile);
app.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
