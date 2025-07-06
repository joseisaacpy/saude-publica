// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";

// Constantes
const professoresRouter = Router();

// Rotas dos PROFESSORES

// Rota para obter todos os professores
professoresRouter.get("/", async (req, res) => {
  try {
    // Resultado
    const result = await supabase.from("professores").select("*");
    // Verifica se houve erro
    if (result.error) {
      res.status(500).json({ error: result.error.message });
      // Se não houver erro, retorna o resultado
    } else {
      res.status(200).json(result.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter um professor por ID
professoresRouter.get("/:id", async (req, res) => {
  try {
    // Pega o ID na URL
    const id = req.params.id;
    // Resultado
    const result = await supabase.from("professores").select("*").eq("id", id);
    // Verifica se houve erro
    if (result.error) {
      res.status(500).json({ error: result.error.message });
      // Se não tiver um resultado, retorna que não foi encontrado
    } else if (result.data.length == 0) {
      res.status(404).json({ error: "Professor não encontrado" });
      // Se não houver erro, retorna o resultado
    } else {
      res.status(200).json(result.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
// Rota pra fazer um POST pra professores
professoresRouter.post("/", async (req, res) => {
  try {
    const dados = req.body;
    const result = await supabase.from("professores").insert(dados).select();
    if (result.error) {
      res.status(500).json({ error: result.error.message });
    } else {
      res
        .status(200)
        .json({ msg: "Professor cadastrado com sucesso", dados: result.data });
    }
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ error: erro.message });
  }
});

// Atualizar um professor pelo ID
professoresRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const novosDados = req.body;

    const result = await supabase
      .from("professores")
      .update(novosDados)
      .eq("id", id)
      .select(); // retorna os dados atualizados

    if (result.error) {
      res.status(500).json({ error: result.error.message });
    } else {
      res.status(200).json({
        msg: "Professor atualizado com sucesso",
        dados: result.data,
      });
    }
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ error: erro.message });
  }
});

// Deletar um professor pelo ID
professoresRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await supabase.from("professores").delete().eq("id", id);

    if (result.error) {
      res.status(500).json({ error: result.error.message });
    } else {
      res.status(200).json({ msg: "Professor deletado com sucesso" });
    }
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ error: erro.message });
  }
});

// Exportação
export default professoresRouter;
