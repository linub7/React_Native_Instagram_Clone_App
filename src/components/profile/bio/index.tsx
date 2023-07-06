import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';

interface Props {
  name?: string;
  bio?: string;
}

const ProfileScreenBio: FC<Props> = ({name, bio}) => {
  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <Text>{bio}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: fontWeights.full,
    color: colors.black,
  },
});

export default ProfileScreenBio;
