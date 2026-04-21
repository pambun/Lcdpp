export type Page = 'home' | 'about' | 'leadership' | 'training' | 'resources' | 'careers' | 'contact';

export interface Leader {
  name: string;
  title: string;
  bio: string;
  photo: string;
  category: 'board' | 'executive' | 'management' | 'directors';
}

export interface Publication {
  title: string;
  description: string;
}

export interface TrainingProgram {
  title: string;
  description: string;
}
