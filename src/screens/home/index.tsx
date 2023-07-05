import {FC} from 'react';
import {FlatList} from 'react-native';

import {posts} from '@assets/data/posts';
import FeedPost from '@components/home/feed-post';

interface Props {}

const HomeScreen: FC<Props> = props => {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => <FeedPost item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
