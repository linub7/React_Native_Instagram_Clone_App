import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './bottom-tabs';
import CommentsScreen from '@screens/comments';
import {RootStackParamList} from 'src/@types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['linubphotos://', 'https://linubphotos.com'],
  config: {
    initialRouteName: 'home',
    screens: {
      comments: 'comments', // linubphotos://comments
      // linubphotos://user/123
      home: {
        screens: {
          'home-stack': {
            initialRouteName: 'feed',
            screens: {
              'user-profile': 'user/:userId', // userId comes from /screens/profile line 23: const userId = route?.params?.userId;
            },
          },
        },
      },
    },
  },
};

interface Props {}

const AppNavigator: FC<Props> = props => {
  return (
    <NavigationContainer linking={linking}>
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
