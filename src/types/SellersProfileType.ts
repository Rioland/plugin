export interface Skill {
  id: number;
  name: string;
  category: string;
  category_id: number;
}

export interface KycVerification {
  id: number;
  user_id: number;
  account_type: string;
  tier: string;
  document_type: string;
  document_file: string;
  selfie_photo: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Award {
  id: number;
  user_id: number;
  type: string;
  title: string;
  from: string;
  desc: string;
  start_year: number;
  end_year: number;
  created_at: string;
  updated_at: string;
}

export interface Experience {
  id: number;
  user_id: number;
  type: string;
  title: string;
  from: string;
  desc: string;
  start_year: number;
  end_year: number;
  created_at: string;
  updated_at: string;
}

export interface SellersProfileType {
  id: number;
  profile_picture: string;
  email: string;
  username: string;
  role: string;
  account_type: string;
  firstname: string;
  lastname: string;
  phone_number: string | null;
  country: string;
  bio: string;
  skills: Skill[];
  kycverifications: KycVerification[];
  awards: Award[];
  experiences: Experience[];
  educations: any[];  // You can define a specific type if education objects are added later
  languages: any[];   // Same here
}
