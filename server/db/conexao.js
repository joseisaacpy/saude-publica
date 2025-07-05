// Imports
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Configurando o dotenv
dotenv.config();

// Constantes
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Exportação
export default supabase;
