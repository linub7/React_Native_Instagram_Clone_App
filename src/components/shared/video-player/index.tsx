import {FC, useState} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '@utils/colors';

interface Props {
  uri: string;
  paused: boolean;
}

const CustomVideoPlayer: FC<Props> = ({uri, paused}) => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => setIsMuted(prev => !prev);

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={false}
        paused={paused}
      />
      <Pressable onPress={handleToggleMute} style={styles.muteButton}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={16}
          color="white"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default CustomVideoPlayer;
