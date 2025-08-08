import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htyqyebdeywsalwtpzmj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0eXF5ZWJkZXl3c2Fsd3Rwem1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NzUxMTMsImV4cCI6MjA3MDE1MTExM30.2vFrtfhnZQgzFcIRehU6O-WmbJbul30h4iBtFJFcAwM';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select();
  if (error) {
    console.error(error.message);
    throw new Error('Cabin could not be created');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error.message);
    throw new Error('Cabin could not be deleted');
  }

  return data;
}

export default supabase;
