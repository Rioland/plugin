-- Insert sample categories
INSERT INTO categories (name, description, subcategories) VALUES
('Programming & Tech', 'Software development and technical services', ARRAY['Web Development', 'Mobile Apps', 'Desktop Applications', 'DevOps', 'Database', 'Cybersecurity']),
('Graphics & Design', 'Visual design and creative services', ARRAY['Logo Design', 'Web Design', 'Print Design', 'Packaging Design', 'Illustration', 'UI/UX Design']),
('Digital Marketing', 'Online marketing and promotion services', ARRAY['Social Media Marketing', 'SEO', 'Content Marketing', 'Email Marketing', 'PPC Advertising', 'Influencer Marketing']),
('Writing & Translation', 'Content creation and language services', ARRAY['Content Writing', 'Copywriting', 'Technical Writing', 'Translation', 'Proofreading', 'Creative Writing']),
('Video & Animation', 'Video production and motion graphics', ARRAY['Video Editing', 'Animation', 'Whiteboard Animation', 'Video Marketing', 'Intro Videos', 'Explainer Videos']),
('Music & Audio', 'Audio production and music services', ARRAY['Voice Over', 'Music Production', 'Audio Editing', 'Sound Design', 'Podcast Production', 'Audio Ads']),
('Business', 'Business consulting and services', ARRAY['Business Plans', 'Market Research', 'Presentations', 'Legal Consulting', 'Financial Consulting', 'HR Consulting']),
('Lifestyle', 'Personal and lifestyle services', ARRAY['Gaming', 'Fitness', 'Nutrition', 'Relationship Advice', 'Travel Planning', 'Personal Styling']);
