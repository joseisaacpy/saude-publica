// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";

// Constantes
const academiasRoutes = Router();

// Rotas dos ACADEMIAS
// Rota para obter todos as academias
academiasRoutes.get("/", async (req, res) => {
  try {
    const result = await supabase.from("academias").select("*");
    if (result.error) {
      res.status(500).json({ error: result.error.message });
    } else {
      res.status(200).json(result.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Exportação
export default academiasRoutes;
