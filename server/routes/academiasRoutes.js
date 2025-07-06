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
// Rota pra obter academia pelo ID
academiasRoutes.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await supabase.from("academias").select("*").eq("id", id);
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

// Rota pra fazer um POST pra academias
academiasRoutes.post("/", async (req, res) => {
  try {
    const dados = req.body;
    const result = await supabase.from("academias").insert(dados).select();
    if (result.error) {
      res.status(500).json({ error: result.error.message });
    } else {
      res
        .status(200)
        .json({ msg: "Academia cadastrada com sucesso", dados: result.data });
    }
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ error: erro.message });
  }
});

// Atualizar um academia pelo ID
academiasRoutes.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const novosDados = req.body;

    const result = await supabase
      .from("academias")
      .update(novosDados)
      .eq("id", id)
      .select(); // retorna os dados atualizados
    if (result.error) {
      res.status(500).json({ error: result.error.message });
    } else {
      res
        .status(200)
        .json({ msg: "Academia atualizada com sucesso", dados: result.data });
    }
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ error: erro.message });
  }
});

// Deletar um academia
academiasRoutes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await supabase.from("academias").delete().eq("id", id);
    if (result.error)
      return res.status(500).json({ error: result.error.message });
    res.status(200).json({ msg: "Academia deletada com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Exportação
export default academiasRoutes;
