// Imports
import { Router } from "express";

// Constantes
const loginRoutes = Router();

// Rotas
loginRoutes.get("/", (req, res) => {
  // res.status(200).sendFile(path.join(__dirname, "../client/dist/index.html"));
  res.status(200).send("teste");
});

// Exportação
export default loginRoutes;
