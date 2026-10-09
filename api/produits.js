import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vnfzzolrcbleyjlfvcfr.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "sb_publishable_ZNFJfyWS7Yf0ZgbdBwl-Lw_VomE-lA1";

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from("promo_solaires")
    .select("*");

  if (error) {
    return res.status(500).json({
      erreur: error.message
    });
  }

  return res.status(200).json(data);
}