import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import CustomPressableButton from '@components/shared/pressables/button';
import {ProfileStackParamList} from 'src/@types/navigation';

interface Props {}

const ProfileScreenButtons: FC<Props> = props => {
  const {navigate} = useNavigation<NavigationProp<ProfileStackParamList>>();

  const handleNavigateToEditProfile = () => navigate('edit-profile');
  const handleSignout = () => {
    console.log('sign out');
  };

  return (
    <View style={styles.container}>
      <CustomPressableButton
        label="Edit Profile"
        onPress={handleNavigateToEditProfile}
      />
      <CustomPressableButton label="Sign out" onPress={handleSignout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProfileScreenButtons;
