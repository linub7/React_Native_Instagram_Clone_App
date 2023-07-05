import {FC, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';
import {Comment} from 'src/@types/comment';

interface Props {
  comment: Comment;
  includeDetails?: boolean;
}

const CommentItem: FC<Props> = ({comment, includeDetails = false}) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleIsLike = () => setIsLiked(prev => !prev);
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment?.user?.image}} style={styles.avatar} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.boldText}>{comment?.user?.username}</Text>&nbsp;{' '}
          {comment?.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleIsLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
  },
  icon: {
    marginHorizontal: 5,
  },
  boldText: {
    fontWeight: fontWeights.bold,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 5,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 5,
  },
});

export default CommentItem;
