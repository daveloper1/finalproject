import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://efwwedqouljhvzoxuuiv.supabase.co";

const supabaseAnonToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmd3dlZHFvdWxqaHZ6b3h1dWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIyMDQ2NTYsImV4cCI6MTk3Nzc4MDY1Nn0.ARQWn39iMJEVpm1Vh5DYVoP075TF01tVpixfrRT0hvk";

export default createClient(supabaseUrl, supabaseAnonToken);
