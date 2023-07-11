import {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from 'src/navigation';

interface Props {}

const App: FC<Props> = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
