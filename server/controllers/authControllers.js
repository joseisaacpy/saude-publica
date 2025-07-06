// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";

// Constantes
const authRoutes = Router();

// Função de login
export function login(req, res) {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.status(200).json({ message: "Login bem-sucedido!" });
  } else {
    return res.status(401).json({ message: "Usuário ou senha inválidos." });
  }
}
