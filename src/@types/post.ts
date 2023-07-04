export interface Post {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: User;
  nofComments: number;
  nofLikes: number;
  comments: Comment[];
}

export interface User {
  id: string;
  username: string;
  image?: string;
  name: string;
  bio?: string;
  posts?: Post[];
  website?: string;
}

export interface Comment {
  id: string;
  comment: string;
  user: User;
}
