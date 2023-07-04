import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '@utils/colors';
import {fontWeights} from '@utils/fonts';

interface Props {
  username: string;
  isLiked: boolean;
  comment: string;
}

const PostFeedFooterCommentItem: FC<Props> = ({
  username,
  isLiked = false,
  comment,
}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.boldText}>{username}</Text>&nbsp; {comment}
      </Text>
      <AntDesign
        name={isLiked ? 'heart' : 'hearto'}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    color: colors.black,
    lineHeight: 18,
  },
  icon: {
    marginHorizontal: 5,
  },
  boldText: {
    fontWeight: fontWeights.bold,
  },
});

export default PostFeedFooterCommentItem;
