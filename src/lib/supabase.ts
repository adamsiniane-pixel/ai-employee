import { createClient } from "@supabase/supabase-js";

import { env } from "../config/env.js";

export const supabase =
  env.supabaseUrl && env.supabaseAnonKey
    ? createClient(env.supabaseUrl, env.supabaseAnonKey)
    : null;

export function getSupabaseClient() {
  if (!supabase) {
    throw new Error("Supabase credentials are not configured.");
  }

  return supabase;
}
