import {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import HomeScreen from '@screens/home';
import CommentsScreen from '@screens/comments';
import ProfileScreen from '@screens/profile';

interface Props {}

const App: FC<Props> = () => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      <ProfileScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
