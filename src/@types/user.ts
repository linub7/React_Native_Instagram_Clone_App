import {Post} from './post';

export interface User {
  id: string;
  username: string;
  image?: string;
  name?: string;
  bio?: string;
  posts?: Post[];
  website?: string;
}
