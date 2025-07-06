// Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import supabase from "./db/conexao.js"; // Traz o banco de dados
import professoresRoutes from "./routes/professoresRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import alunosRoutes from "./routes/alunosRoutes.js";
import academiasRoutes from "./routes/academiasRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Configurando o dotenv
dotenv.config();

// Constantes
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Habilita o CORS
app.use(express.json()); // Habilita o JSON
app.use(express.urlencoded({ extended: true })); // Habilita o URL Encoded (Para enviar formularios)
// Servir arquivos estáticos do frontend buildado
app.use(express.static(path.join(__dirname, "../client/dist")));
// Faz o uso das rotas
app.use("/api/professores", professoresRoutes);
app.use("/api/academias", academiasRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/alunos", alunosRoutes);
app.use("/login", loginRoutes);

// Rotas
// Rota para servir index.html em SPA
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
// Rota pra formularios
app.get("/cadastro", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "../client/dist/form-page.html"));
});

// Rota não encontrada
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../client/dist/404.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
