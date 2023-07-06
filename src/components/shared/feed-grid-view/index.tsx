import {ComponentType, FC, ReactElement} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Post} from 'src/@types/post';
import FeedGridItem from '../feed-grid-item';

interface Props {
  data?: Post[];
  ListComponentHeader: ComponentType<any> | ReactElement | null | undefined;
  numColumns?: number;
}

const FeedGridView: FC<Props> = ({
  data,
  ListComponentHeader,
  numColumns = 3,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      renderItem={({item}) => <FeedGridItem item={item} />}
      ListHeaderComponent={ListComponentHeader}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: -1,
  },
});

export default FeedGridView;
