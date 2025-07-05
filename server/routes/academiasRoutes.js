// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";

// Constantes
const academiasRoutes = Router();

// Rotas dos PROFESSORES
academiasRoutes.get("/", (req, res) => {
  res.send("Academias");
});

// Exportação
export default academiasRoutes;
