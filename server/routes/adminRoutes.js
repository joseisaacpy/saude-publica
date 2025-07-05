// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";

// Constantes
const adminRouter = Router();

// Rotas do ADMIN
adminRouter.get("/", (req, res) => {
  res.send("Admin");
});

// Exportação
export default adminRouter;
