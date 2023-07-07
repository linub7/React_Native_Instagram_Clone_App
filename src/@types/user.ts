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

export type EditableUserFields = 'name' | 'username' | 'website' | 'bio';
export type EditableUser = Pick<User, EditableUserFields>;
