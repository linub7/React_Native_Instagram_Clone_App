import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import ProfileScreenHeader from '../header';
import ProfileScreenBio from '../bio';
import ProfileScreenButtons from '../buttons';

interface Props {
  image?: string;
  name?: string;
  bio?: string;
}

const ListHeaderComponent: FC<Props> = ({image, name, bio}) => {
  return (
    <View style={styles.container}>
      <ProfileScreenHeader image={image} />
      <ProfileScreenBio name={name} bio={bio} />
      <ProfileScreenButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListHeaderComponent;
