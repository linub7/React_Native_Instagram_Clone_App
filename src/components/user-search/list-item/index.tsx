import {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';
import {HomeStackParamList} from 'src/@types/navigation';

import {User} from 'src/@types/user';

interface Props {
  user: User;
}

const UserSearchScreenListItem: FC<Props> = ({user}) => {
  const {navigate} = useNavigation<NavigationProp<HomeStackParamList>>();

  const handleNavigateToUserScreen = () =>
    navigate('user-profile', {userId: user?.id});

  return (
    <Pressable onPress={handleNavigateToUserScreen} style={styles.container}>
      <Image source={{uri: user?.image}} style={styles.image} />
      <View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontWeight: fontWeights.bold,
    marginBottom: 5,
    color: colors.black,
  },
  username: {
    color: colors.grey,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
});

export default UserSearchScreenListItem;
