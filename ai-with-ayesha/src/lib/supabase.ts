import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fzwvwbxsuldkwatcktut.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6d3Z3YnhzdWxka3dhdGNrdHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwODkwNjIsImV4cCI6MjA3ODY2NTA2Mn0.3U1FF2DZ9Z2D1SBsXvaE3CjKjzngkD_2oukDxGI2EE8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
