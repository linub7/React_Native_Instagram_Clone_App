import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {}

const HeaderTitle: FC<Props> = props => {
  return (
    <Image
      source={require('src/assets/images/logo.png')}
      resizeMode="contain"
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 40,
  },
});

export default HeaderTitle;
