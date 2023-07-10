import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/home';
import ProfileScreen from '@screens/profile';
import HeaderTitle from '@components/shared/header-title';

interface Props {}

const Stack = createNativeStackNavigator();

const HomeStackNavigator: FC<Props> = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="user-profile"
        component={ProfileScreen}
        options={{headerTitle: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
