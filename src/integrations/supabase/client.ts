// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ezmxvcqoodnsbmrpetpr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6bXh2Y3Fvb2Ruc2JtcnBldHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTk0MzEsImV4cCI6MjA1OTk3NTQzMX0.Disi8X1Pj5sICLOhJ-_vhUxmxRR9SE-4ipRvBBEQkoM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);