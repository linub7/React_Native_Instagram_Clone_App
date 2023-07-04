import {FC, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import FeedPost from '@components/home/feed-post';
import {posts} from '@assets/data/posts';

interface Props {}

const App: FC<Props> = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {posts?.map((item, index) => (
        <FeedPost key={index} item={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
