import {FC, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ViewToken,
  ViewabilityConfig,
  useWindowDimensions,
} from 'react-native';

import {colors} from '@utils/colors';
import CarouselImageItem from './image-item';

interface Props {
  images: string[];
}

const CustomCarousel: FC<Props> = ({images}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  const {width} = useWindowDimensions();

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        removeClippedSubviews
        initialNumToRender={3}
        data={images}
        style={styles.container}
        renderItem={({item}) => <CarouselImageItem item={item} width={width} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeImageIndex === index ? colors.primary : colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    aspectRatio: 1,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,

    width: '100%',
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 3,
    margin: 10,
  },
});

export default CustomCarousel;
