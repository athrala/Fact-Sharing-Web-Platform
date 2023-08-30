import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ylucksjxyjaeqpsnbehl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsdWNrc2p4eWphZXFwc25iZWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MDE1MDEsImV4cCI6MjAwODA3NzUwMX0.W1cfgSrmwsPOkUXf_2RJ_Bl9mNcd3I9y96k4NklOwSc";
const supabase = createClient(supabaseUrl, supabaseKey);
