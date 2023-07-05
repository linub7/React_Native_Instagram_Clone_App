import {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props {
  item: string;
  width: number;
}

const CarouselImageItem: FC<Props> = ({item, width}) => {
  return <Image source={{uri: item}} style={[styles.image, {width}]} />;
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
});

export default CarouselImageItem;
