import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';
import {FeedStackParamList} from 'src/@types/navigation';

interface Props {
  userImage?: string;
  username?: string;
  userId?: string;
}

const FeedPostHeader: FC<Props> = ({userImage, username, userId}) => {
  const {navigate} = useNavigation<NavigationProp<FeedStackParamList>>();

  const handleNavigate = () => {
    if (!userId) return;
    navigate('user-profile', {userId});
  };
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: userImage,
        }}
        style={styles.userAvatar}
      />
      <Text onPress={handleNavigate} style={styles.userName}>
        {username}
      </Text>
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
