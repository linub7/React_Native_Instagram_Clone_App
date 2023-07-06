import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import CustomPressableButton from '@components/shared/pressables/button';

interface Props {}

const ProfileScreenButtons: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <CustomPressableButton
        label="Edit Profile"
        onPress={() => console.log('edit button')}
      />
      <CustomPressableButton
        label="Another Button"
        onPress={() => console.log('another button')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProfileScreenButtons;
