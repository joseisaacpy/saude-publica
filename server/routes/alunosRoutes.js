// Imports
import e, { Router } from "express";
import supabase from "../db/conexao.js";
// Constantes
const alunosRouter = Router();

// Rotas dos ALUNOS
// Rota para obter todos os alunos
alunosRouter.get("/", async (req, res) => {
  try {
    const result = await supabase.from("alunos").select("*");
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

// Rota para obter um professor por ID
alunosRouter.get("/:id", async (req, res) => {
  try {
    // Pega o ID na URL
    const id = req.params.id;
    // Resultado
    const result = await supabase.from("alunos").select("*").eq("id", id);
    // Verifica se houve erro
    if (result.error) {
      res.status(500).json({ error: result.error.message });
      // Se não tiver um resultado, retorna que não foi encontrado
    } else if (result.data.length == 0) {
      res.status(404).json({ error: "Aluno não encontrado" });
      // Se não houver erro, retorna o resultado
    } else {
      res.status(200).json(result.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Rota pra fazer um POST pra alunos
alunosRouter.post("/", async (req, res) => {
  try {
    const dados = req.body;
    const resul = await supabase.from("alunos").insert(dados).select();
    console.log("🧾 Body recebido:", req.body);

    if (resul.error) {
      res.status(500).json({ error: resul.error.message });
    } else {
      res
        .status(200)
        .json({ msg: "Aluno cadastrado com sucesso", dados: resul.data });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Deletar um aluno
alunosRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await supabase.from("alunos").delete().eq("id", id);
    if (result.error)
      return res.status(500).json({ error: result.error.message });
    res.status(200).json({ msg: "Aluno deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Exportação
export default alunosRouter;
