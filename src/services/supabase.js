import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htyqyebdeywsalwtpzmj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0eXF5ZWJkZXl3c2Fsd3Rwem1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzUxMTMsImV4cCI6MjA3MDE1MTExM30.2vFrtfhnZQgzFcIRehU6O-WmbJbul30h4iBtFJFcAwM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
