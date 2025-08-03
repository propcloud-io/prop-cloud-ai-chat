-- Create waitlist table for storing signup data
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  city TEXT,
  properties_count INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for signup form)
CREATE POLICY "Allow public waitlist signups" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reads (admin only access)
CREATE POLICY "Restrict waitlist reads" 
ON public.waitlist 
FOR SELECT 
USING (false);