import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  feed: undefined;
  'user-profile': {
    userId: string;
  };
};

export type ProfileStackParamList = {
  profile: undefined;
  'edit-profile': undefined;
};

export type BottomTabStackParamList = {
  'home-stack': undefined;
  search: undefined;
  upload: undefined;
  notifications: undefined;
  'my-profile': undefined;
};

export type SearchTabStackParamList = {
  users: undefined;
  posts: undefined;
};

export type RootStackParamList = {
  auth: undefined;
  home: undefined;
  comments: {
    postId: string;
  };
};

export type AuthStackNavigatorParamList = {
  'sign-in': undefined;
  'sign-up': undefined;
  'confirm-email': {username?: string};
  'forgot-password': undefined;
  'new-password': undefined;
};

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabStackParamList,
  'my-profile'
>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'user-profile'
>;

export type UserProfileRouteProp = RouteProp<
  HomeStackParamList,
  'user-profile'
>;

export type MyProfileRouteProp = RouteProp<
  BottomTabStackParamList,
  'my-profile'
>;
