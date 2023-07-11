import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackNavigatorParamList} from 'src/@types/navigation';
import SignupScreen from '@screens/auth/signup';
import SigninScreen from '@screens/auth/signin';
import NewPasswordScreen from '@screens/auth/new-password';
import ForgotPasswordScreen from '@screens/auth/forgot-password';
import ConfirmEmailScreen from '@screens/auth/confirm-email';

interface Props {}

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator: FC<Props> = props => {
  return (
    <Stack.Navigator initialRouteName="sign-in">
      <Stack.Screen name="sign-up" component={SignupScreen} />
      <Stack.Screen name="sign-in" component={SigninScreen} />
      <Stack.Screen name="new-password" component={NewPasswordScreen} />
      <Stack.Screen name="forgot-password" component={ForgotPasswordScreen} />
      <Stack.Screen name="confirm-email" component={ConfirmEmailScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
