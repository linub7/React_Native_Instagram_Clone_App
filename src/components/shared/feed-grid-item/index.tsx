import {FC} from 'react';
import {Image, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors} from '@utils/colors';
import {Post} from 'src/@types/post';

interface Props {
  item: Post;
}

const FeedGridItem: FC<Props> = ({item}) => {
  return (
    <View
      style={{
        aspectRatio: 1,
        flex: 1,
        padding: 1,
        maxWidth: '33.333333%',
      }}>
      <Image
        source={{
          uri: item?.image || (item?.images && item?.images[0]),
        }}
        style={{
          flex: 1,
        }}
      />
      {item?.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
