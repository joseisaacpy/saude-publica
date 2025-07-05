// Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import supabase from "./db/conexao.js"; // Traz o banco de dados
// import adminRoutes from "./routes/adminRoutes.js";

// Configurando o dotenv
dotenv.config();

// Constantes
const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Habilita o CORS
app.use(express.json()); // Habilita o JSON
app.use(express.urlencoded({ extended: true })); // Habilita o URL Encoded (Para enviar formularios)

// Rotas
app.get("/", (req, res) => {
  res.send("API rodando");
});

// Rota não encontrada
app.use((req, res, next) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
