import {FC, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

import {colors} from '@utils/colors';
import {fontSizes, fontWeights} from '@utils/fonts';

interface Props {}

const CommentInputBox: FC<Props> = props => {
  const [comment, setComment] = useState('');
  const handlePressPost = () => {
    console.log(comment);
    setComment('');
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.avatar}
      />
      <TextInput
        placeholder="Write Your Comment..."
        style={styles.input}
        autoCapitalize="none"
        value={comment}
        onChangeText={setComment}
        multiline
      />

      <Text onPress={handlePressPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,

    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,

    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,

    paddingVertical: 5,
    paddingRight: 50,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  button: {
    color: colors.primary,
    position: 'absolute',
    right: 15,
    bottom: 17,
    fontSize: fontSizes.s,
    fontWeight: fontWeights.full,
  },
});

export default CommentInputBox;
