import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ydbdusxpmcfjgdjutnqv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkYmR1c3hwbWNmamdkanV0bnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NzUxMjIsImV4cCI6MjA2NDA1MTEyMn0.nmaSn69SLVvheoZ4pUxwzekeuA-YDzRmJLrHsDtTYn4'

export const supabase = createClient(supabaseUrl, supabaseKey)
