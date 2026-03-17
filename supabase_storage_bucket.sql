-- Supabase Storage Bucket and RLS Setup
-- Run this in your Supabase SQL Editor

-- Create the 'public' bucket if it doesn't exist
insert into storage.buckets (id, name, public)
values ('public', 'public', true)
on conflict (id) do update set public = true;

-- Enable RLS on storage.objects
alter table storage.objects enable row level security;

-- Drop existing policies to avoid conflicts
drop policy if exists "Public Read Access" on storage.objects;
drop policy if exists "Authenticated Users Can Upload" on storage.objects;
drop policy if exists "Authenticated Users Can Delete" on storage.objects;
drop policy if exists "Authenticated Users Can Update" on storage.objects;

-- Policy 1: Allow public read access to the 'public' bucket
CREATE POLICY "Public Read Access" 
ON storage.objects FOR SELECT 
TO public
USING (bucket_id = 'public');

-- Policy 2: Allow authenticated users to upload to 'public' bucket
CREATE POLICY "Authenticated Users Can Upload" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'public');

-- Policy 3: Allow authenticated users to update their own files
CREATE POLICY "Authenticated Users Can Update" 
ON storage.objects FOR UPDATE 
TO authenticated 
USING (bucket_id = 'public' AND owner = auth.uid())
WITH CHECK (bucket_id = 'public');

-- Policy 4: Allow authenticated users to delete their own files
CREATE POLICY "Authenticated Users Can Delete" 
ON storage.objects FOR DELETE 
TO authenticated 
USING (bucket_id = 'public' AND owner = auth.uid());

-- Policy 5: Allow service role full access (for admin operations)
CREATE POLICY "Service Role Full Access" 
ON storage.objects 
FOR ALL 
TO service_role 
USING (bucket_id = 'public')
WITH CHECK (bucket_id = 'public');
