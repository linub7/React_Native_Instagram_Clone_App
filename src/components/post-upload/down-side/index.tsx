import {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors} from '@utils/colors';
import PostUploadButtonsContainer from '../buttons-container';

interface Props {
  isCameraReady: boolean;
  isRecording: boolean;
  handleTakePicture?(): Promise<void>;
  handleStartRecording?(): Promise<void>;
  handleStopRecording?(): Promise<void>;
  handleFlipCamera?(): void;
}

const PostUploadScreenDownSide: FC<Props> = ({
  isCameraReady = false,
  isRecording = false,
  handleTakePicture,
  handleStartRecording = () => {},
  handleStopRecording = () => {},
  handleFlipCamera = () => {},
}) => {
  return (
    <PostUploadButtonsContainer containerStyle={{bottom: 25}}>
      <MaterialIcons name="photo-library" size={30} color={colors.white} />
      {isCameraReady && (
        <Pressable
          onPress={handleTakePicture}
          onLongPress={handleStartRecording}
          onPressOut={handleStopRecording}>
          <View
            style={[
              styles.circle,
              {backgroundColor: isRecording ? colors.accent : colors.white},
            ]}
          />
        </Pressable>
      )}
      <Pressable onPress={handleFlipCamera}>
        <MaterialIcons name="flip-camera-ios" size={30} color={colors.white} />
      </Pressable>
    </PostUploadButtonsContainer>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75 / 2,
    backgroundColor: colors.white,
  },
});

export default PostUploadScreenDownSide;
