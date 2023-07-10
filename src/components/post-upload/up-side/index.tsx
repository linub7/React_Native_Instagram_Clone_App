import {FC} from 'react';
import {Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlashMode} from 'expo-camera';

import PostUploadButtonsContainer from '../buttons-container';
import {colors} from '@utils/colors';
import {flashModeToIcon} from '@utils/constants';

interface Props {
  flash: FlashMode;
  handleFlashMode?(): void;
}

const PostUploadScreenUpSide: FC<Props> = ({
  flash,
  handleFlashMode = () => {},
}) => {
  return (
    <PostUploadButtonsContainer containerStyle={{top: 25}}>
      <MaterialIcons name="close" size={30} color={colors.white} />
      <Pressable onPress={handleFlashMode}>
        <MaterialIcons
          name={flashModeToIcon[flash]}
          size={30}
          color={colors.white}
        />
      </Pressable>

      <MaterialIcons name="settings" size={30} color={colors.white} />
    </PostUploadButtonsContainer>
  );
};

export default PostUploadScreenUpSide;
