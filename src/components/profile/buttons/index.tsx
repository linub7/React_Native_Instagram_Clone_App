import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import CustomPressableButton from '@components/shared/pressables/button';
import {ProfileStackParamList} from 'src/@types/navigation';

interface Props {}

const ProfileScreenButtons: FC<Props> = props => {
  const {goBack, navigate} =
    useNavigation<NavigationProp<ProfileStackParamList>>();

  const handleNavigateToEditProfile = () => navigate('edit-profile');

  return (
    <View style={styles.container}>
      <CustomPressableButton
        label="Edit Profile"
        onPress={handleNavigateToEditProfile}
      />
      <CustomPressableButton label="Go Back" onPress={() => goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProfileScreenButtons;
