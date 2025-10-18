const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token faltante o inválido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "TU_SECRETO_JWT"); 
    req.user = decoded; 
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

module.exports = authMiddleware;
