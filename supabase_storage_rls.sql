-- Supabase Storage RLS Policy for Public Bucket
-- Run this in your Supabase SQL Editor

-- Enable RLS on storage.objects (if not already enabled)
alter table storage.objects enable row level security;

-- Policy: Allow public read access to the 'public' bucket
CREATE POLICY "Public Read Access" 
ON storage.objects FOR SELECT 
TO public
USING (bucket_id = 'public');

-- Policy: Allow authenticated users to upload to 'public' bucket
CREATE POLICY "Authenticated Users Can Upload" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'public');

-- Policy: Allow authenticated users to delete their own uploads
CREATE POLICY "Authenticated Users Can Delete" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'public' AND owner = auth.uid());
