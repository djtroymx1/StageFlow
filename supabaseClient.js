import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://oznceodemhckmrmubksc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96bmNlb2RlbWhja21ybXVia3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NDMxOTgsImV4cCI6MjA3MDUxOTE5OH0.g2kveLX1RUuxpBz0esau6MF0oa8Uz7fxrc9rrA7EbbQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
