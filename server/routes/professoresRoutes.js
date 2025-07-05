// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";

// Constantes
const professoresRouter = Router();

// Rotas dos PROFESSORES
professoresRouter.get("/", (req, res) => {
  res.send("Professores");
});

// Exportação
export default professoresRouter;
