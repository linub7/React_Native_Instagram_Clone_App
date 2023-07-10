import {FC, ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const PostUploadButtonsContainer: FC<Props> = ({children, containerStyle}) => {
  return (
    <View style={[styles.buttonsContainer, containerStyle]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },
});

export default PostUploadButtonsContainer;
