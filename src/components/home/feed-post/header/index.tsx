import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';

interface Props {
  userImage?: string;
  username: string;
}

const FeedPostHeader: FC<Props> = ({userImage, username}) => {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: userImage,
        }}
        style={styles.userAvatar}
      />
      <Text style={styles.userName}>{username}</Text>
      <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
});

export default FeedPostHeader;
