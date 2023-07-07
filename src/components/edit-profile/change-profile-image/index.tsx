import {FC} from 'react';
import {Image, StyleSheet, Text} from 'react-native';

import {colors} from '@utils/colors';
import {fontSizes, fontWeights} from '@utils/fonts';

interface Props {
  image?: string;
}

const EditProfileScreenChangeProfileImage: FC<Props> = ({image}) => {
  return (
    <>
      <Image source={{uri: image}} style={styles.avatar} />
      <Text style={styles.text}>Change Profile Photo</Text>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 75,
  },
  text: {
    color: colors.primary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semi,
    marginTop: 10,
  },
});

export default EditProfileScreenChangeProfileImage;
