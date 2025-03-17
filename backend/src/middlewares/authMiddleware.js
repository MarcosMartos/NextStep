import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  // Leer el token desde el header Authorization
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verificar el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Adjuntar el usuario decodificado al request (req)
      req.user = decoded;

      next(); // Pasar al siguiente middleware
    } catch (error) {
      return res.status(401).json({ message: "Token inválido o expirado" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};
