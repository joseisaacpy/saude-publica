// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";
// Constantes
const alunosRouter = Router();

// Rotas dos ALUNOS
alunosRouter.get("/", (req, res) => {
  res.send("Alunos");
});

// Exportação
export default alunosRouter;
