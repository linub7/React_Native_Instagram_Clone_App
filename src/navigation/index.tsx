import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/home';
import ProfileScreen from '@screens/profile';
import HeaderTitle from '@components/shared/header-title';

const Stack = createNativeStackNavigator();

interface Props {}

const AppNavigator: FC<Props> = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="feed"
        screenOptions={{headerShown: true}}>
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
