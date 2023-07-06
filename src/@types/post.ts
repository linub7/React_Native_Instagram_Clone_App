import {Comment} from './comment';
import {User} from './user';

export interface Post {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user?: User;
  nofComments?: number;
  nofLikes?: number;
  comments?: Comment[];
}
