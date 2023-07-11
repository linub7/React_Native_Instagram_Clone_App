import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '@screens/profile';
import HeaderTitle from '@components/shared/header-title';
import EditProfileScreen from '@screens/edit-profile';
import {ProfileStackParamList} from 'src/@types/navigation';

interface Props {}

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: FC<Props> = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="edit-profile"
        component={EditProfileScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
