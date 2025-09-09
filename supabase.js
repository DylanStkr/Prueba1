import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://enfkhgbfneqhckghuybo.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZmtoZ2JmbmVxaGNrZ2h1eWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0Mzk4NDYsImV4cCI6MjA3MzAxNTg0Nn0.-HCCwf1TZs3Bkd-tf25MjIMDTQkZw2gjwiWlnmQdOUk'; 
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);