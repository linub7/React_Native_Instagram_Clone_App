import {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';
import {Comment} from 'src/@types/comment';
import CommentItem from '@components/shared/comment-item';
import {RootStackParamList} from 'src/@types/navigation';

interface Props {
  nofLikes?: number;
  username?: string;
  description?: string;
  nofComments?: number;
  comments?: Comment[];
  createdAt?: string;
  isLiked: boolean;
  id: string;
  toggleIsLike?(): void;
}

const PostFeedFooter: FC<Props> = ({
  nofLikes,
  username,
  description,
  nofComments,
  comments,
  createdAt,
  isLiked = false,
  id,
  toggleIsLike = () => {},
}) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigateToComments = () => navigate('comments', {postId: id});
  const toggleShowMore = () => setIsShowMore(prev => !prev);

  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <Pressable onPress={toggleIsLike}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={isLiked ? colors.accent : colors.black}
          />
        </Pressable>
        <Ionicons
          name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="bookmark"
          size={24}
          style={{marginLeft: 'auto'}}
          color={colors.black}
        />
      </View>

      <Text style={styles.text}>
        Liked by
        <Text style={styles.boldText}>vuedev77</Text>
        &nbsp;and&nbsp;
        <Text style={styles.boldText}>{nofLikes} others</Text>
      </Text>

      <Text style={styles.text} numberOfLines={isShowMore ? 0 : 3}>
        <Text style={styles.boldText}>{username}</Text>&nbsp; {description}
      </Text>
      <Text onPress={toggleShowMore}>{isShowMore ? 'less' : 'more'}</Text>
      <Text onPress={handleNavigateToComments}>
        View all {nofComments} comments
      </Text>
      {comments?.map((el, index) => (
        <CommentItem comment={el} key={index} />
      ))}
      <Text>{createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  boldText: {
    fontWeight: fontWeights.bold,
  },
});

export default PostFeedFooter;
