export interface Author {
  name: string;
  picture: string;
  bio?: string;
  id: string;
  email: string;
  socialMedia: {
    twitter: string;
    linkedin: string;
    github: string;
    medium: string;
  };
  articles: string[]; // Array of article IDs or slugs
  expertise: string[]; // Array of expertise areas
  joinDate: Date;
  lastActive: Date;
  isVerified: boolean;
  role: 'contributor' | 'editor' | 'admin';
  preferences: {
    notifications: boolean;
    newsletter: boolean;
    publicProfile: boolean;
  };
}

export default Author;
