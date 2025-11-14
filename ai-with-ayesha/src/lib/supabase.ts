import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fzwvwbxsuldkwatcktut.supabase.co/functions/v1/contact-form-submit";
const supabaseAnonKey = "ba81f180f20134218db62b88b68532e72eac5adeb7064bc1b98c3ec61d7991f2";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
