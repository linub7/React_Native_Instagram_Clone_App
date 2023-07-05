import {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import HomeScreen from '@screens/home';

interface Props {}

const App: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
