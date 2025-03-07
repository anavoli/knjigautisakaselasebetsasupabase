/*
  # Create guestbook entries table

  1. New Tables
    - `guestbook_entries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `visit_date` (date, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
  
  2. Security
    - Enable RLS on `guestbook_entries` table
    - Add policies for:
      - Anyone can read entries
      - Anyone can create entries
*/

CREATE TABLE IF NOT EXISTS guestbook_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  visit_date date NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE guestbook_entries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read entries
CREATE POLICY "Anyone can read guestbook entries"
  ON guestbook_entries
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to create entries
CREATE POLICY "Anyone can create guestbook entries"
  ON guestbook_entries
  FOR INSERT
  TO public
  WITH CHECK (true);