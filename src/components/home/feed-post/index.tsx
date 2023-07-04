import {FC, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Post} from 'src/@types/post';
import FeedPostHeader from './header';
import PostFeedFooter from './footer';

interface Props {
  item: Post;
}

const FeedPost: FC<Props> = ({item}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.container}>
      <FeedPostHeader
        userImage={item?.user?.image}
        username={item?.user?.username}
      />
      <Image
        source={{
          uri: item?.image,
        }}
        style={styles.image}
      />
      <PostFeedFooter
        comments={item?.comments}
        createdAt={item?.createdAt}
        description={item?.description}
        isLiked={isLiked}
        nofComments={item?.nofComments}
        nofLikes={item?.nofLikes}
        username={item?.user?.username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default FeedPost;
