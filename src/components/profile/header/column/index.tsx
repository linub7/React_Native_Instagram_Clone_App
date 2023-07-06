import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@utils/colors';
import {fontSizes, fontWeights} from '@utils/fonts';

interface Props {
  count: number;
  label: string;
}

const ProfileScreenHeaderColumn: FC<Props> = ({count, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.full,
    color: colors.black,
  },
});

export default ProfileScreenHeaderColumn;
