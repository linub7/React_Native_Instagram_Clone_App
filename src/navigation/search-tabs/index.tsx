import {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SearchTabStackParamList} from 'src/@types/navigation';
import {colors} from '@utils/colors';
import UserSearchScreen from '@screens/user-search';
import CommentsScreen from '@screens/comments';

interface Props {}

const Tab = createMaterialTopTabNavigator<SearchTabStackParamList>();

const SearchTabNavigator: FC<Props> = props => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: insets.top,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Tab.Screen name="users" component={UserSearchScreen} />
      <Tab.Screen name="posts" component={CommentsScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
