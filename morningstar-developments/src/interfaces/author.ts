export type Author = {
  id: string;
  name: string;
  picture: string;
  bio: string;
  email: string;
  website?: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    medium?: string;
  };
  articles: string[]; // Array of article IDs
  expertise: string[];
  joinDate: Date;
  lastActive: Date;
  isVerified: boolean;
  role: 'contributor' | 'editor' | 'admin';
  preferences: {
    notifications: boolean;
    newsletter: boolean;
    publicProfile: boolean;
  };
};

export default Author;
