import {FC, ReactNode} from 'react';
import {Pressable, StyleSheet} from 'react-native';

interface Props {
  onDoublePress?(): void;
  children: ReactNode;
}

const DoublePressable: FC<Props> = ({onDoublePress = () => {}, children}) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();

    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

const styles = StyleSheet.create({
  container: {},
});

export default DoublePressable;
