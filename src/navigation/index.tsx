import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './bottom-tabs';
import CommentsScreen from '@screens/comments';

const Stack = createNativeStackNavigator();

interface Props {}

const AppNavigator: FC<Props> = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
