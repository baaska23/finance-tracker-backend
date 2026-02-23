import { createClient, SupabaseClient } from "@supabase/supabase-js";
import * as dotenv from 'dotenv';

dotenv.config();
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "";

console.log("SUPABASE", SUPABASE_KEY, SUPABASE_URL)

export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);