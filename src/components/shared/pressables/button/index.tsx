import {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors} from '@utils/colors';
import {fontSizes, fontWeights} from '@utils/fonts';

interface Props {
  onPress?(): void;
  label: string;
}

const CustomPressableButton: FC<Props> = ({onPress = () => {}, label}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  label: {
    fontWeight: fontWeights.semi,
    color: colors.black,
  },
});

export default CustomPressableButton;
