import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import CustomPressableButton from '@components/shared/pressables/button';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const ProfileScreenButtons: FC<Props> = props => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <CustomPressableButton
        label="Edit Profile"
        onPress={() => console.log('edit button')}
      />
      <CustomPressableButton label="Another Button" onPress={() => goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProfileScreenButtons;
