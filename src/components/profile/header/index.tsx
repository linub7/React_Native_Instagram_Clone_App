import {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import ProfileScreenHeaderColumn from './column';

interface Props {
  image?: string;
}

const ProfileScreenHeader: FC<Props> = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.avatar} />
      <ProfileScreenHeaderColumn count={98} label="Posts" />
      <ProfileScreenHeaderColumn count={198} label="Followers" />
      <ProfileScreenHeaderColumn count={298} label="Following" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    aspectRatio: 1,
    width: 100,
    borderRadius: 100 / 2,
  },
});

export default ProfileScreenHeader;
