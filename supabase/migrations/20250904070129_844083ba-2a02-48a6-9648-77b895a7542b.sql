-- Add source tracking to waitlist table
ALTER TABLE public.waitlist 
ADD COLUMN source text;