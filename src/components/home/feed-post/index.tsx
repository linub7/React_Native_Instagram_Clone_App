import {FC, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Post} from 'src/@types/post';
import FeedPostHeader from './header';
import PostFeedFooter from './footer';
import DoublePressable from '@components/shared/pressables/double';
import CustomCarousel from '@components/shared/carousel';

interface Props {
  item: Post;
}

const FeedPost: FC<Props> = ({item}) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleIsLike = () => setIsLiked(prev => !prev);

  return (
    <View style={styles.container}>
      <FeedPostHeader
        userImage={item?.user?.image}
        username={item?.user?.username}
      />
      <DoublePressable onDoublePress={toggleIsLike}>
        {item.image ? (
          <Image
            source={{
              uri: item?.image,
            }}
            style={styles.image}
          />
        ) : item?.images ? (
          <CustomCarousel images={item?.images} />
        ) : null}
      </DoublePressable>
      <PostFeedFooter
        comments={item?.comments}
        createdAt={item?.createdAt}
        description={item?.description}
        nofComments={item?.nofComments}
        nofLikes={item?.nofLikes}
        username={item?.user?.username}
        isLiked={isLiked}
        toggleIsLike={toggleIsLike}
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
