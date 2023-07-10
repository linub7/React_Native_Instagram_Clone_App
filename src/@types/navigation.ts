export type HomeStackParamList = {
  feed: undefined;
  'user-profile': {
    userId: string;
  };
};

export type ProfileStackParamList = {
  profile: undefined;
  'edit-profile': {
    userId: string | undefined;
  };
};

export type RootStackParamList = {
  comments: {
    postId: string;
  };
};
