// Imports
import { Router } from "express";
import supabase from "../db/conexao.js";

// Constantes
const adminRouter = Router();

// Listar todos os admins
adminRouter.get("/", async (req, res) => {
  try {
    const result = await supabase.from("admin").select("*");
    if (result.error)
      return res.status(500).json({ error: result.error.message });
    res.status(200).json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obter um admin por ID
adminRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await supabase.from("admin").select("*").eq("id", id);
    if (result.error) {
      return res.status(500).json({ error: result.error.message });
    } else if (result.data.length === 0) {
      return res.status(404).json({ error: "Admin não encontrado" });
    } else {
      res.status(200).json(result.data);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar admin
adminRouter.post("/", async (req, res) => {
  try {
    const dados = req.body;
    const result = await supabase.from("admin").insert(dados).select();
    if (result.error)
      return res.status(500).json({ error: result.error.message });
    res
      .status(200)
      .json({ msg: "Admin criado com sucesso", dados: result.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar admin
adminRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const novosDados = req.body;
    const result = await supabase
      .from("admin")
      .update(novosDados)
      .eq("id", id)
      .select();
    if (result.error)
      return res.status(500).json({ error: result.error.message });
    res
      .status(200)
      .json({ msg: "Admin atualizado com sucesso", dados: result.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Deletar admin
adminRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await supabase.from("admin").delete().eq("id", id);
    if (result.error)
      return res.status(500).json({ error: result.error.message });
    res.status(200).json({ msg: "Admin deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Exportação
export default adminRouter;
