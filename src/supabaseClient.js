import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://atrrtcgzyifnxdvklfyu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0cnJ0Y2d6eWlmbnhkdmtsZnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MjAzMzgsImV4cCI6MjAzNDI5NjMzOH0.qmisq8tFTZPvTaUj2FI-St-hGkEiwq-KdSWVuXmlOwo"
);

export default supabase;
