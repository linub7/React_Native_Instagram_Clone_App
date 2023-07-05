import {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {comments} from '@assets/data/comments';
import CommentItem from '@components/shared/comment-item';
import CommentInputBox from '@components/comments/input-box';

interface Props {}

const CommentsScreen: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{padding: 10}}
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CommentItem includeDetails comment={item} />}
      />
      <CommentInputBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommentsScreen;
