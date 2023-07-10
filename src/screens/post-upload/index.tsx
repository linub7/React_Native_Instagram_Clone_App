import {FC, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
  VideoQuality,
} from 'expo-camera';

import {colors} from '@utils/colors';
import {flashModes} from '@utils/constants';
import PostUploadScreenDownSide from '@components/post-upload/down-side';
import PostUploadScreenUpSide from '@components/post-upload/up-side';

interface Props {}

const PostUploadScreen: FC<Props> = props => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };

    getPermission();
  }, []);

  const handleFlipCamera = () =>
    setCameraType(currentCameraType =>
      currentCameraType === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );

  const handleFlashMode = () => {
    const currentIdx = flashModes.indexOf(flash);
    const nextIdx = currentIdx === flashModes.length - 1 ? 0 : currentIdx + 1;
    setFlash(flashModes[nextIdx]);
  };

  const handleTakePicture = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) return;

    const options: CameraPictureOptions = {
      quality: 0.5, // 0: very compress & low size | 1: vice versa
      base64: false, // include base64 version of the image
      skipProcessing: true, // on android, the 'processing' step messes the orientation on some devices
    };
    const result = await cameraRef.current.takePictureAsync(options);
    console.log(result);
  };

  const handleStartRecording = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) return;

    const options: CameraRecordingOptions = {
      quality: VideoQuality['480p'],
      maxDuration: 60,
      maxFileSize: 4 * 1024 * 1024, // in bytes
      mute: false,
    };

    setIsRecording(true);
    try {
      const result = await cameraRef.current.recordAsync(options);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setIsRecording(false);
  };

  const handleStopRecording = async () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (hasPermission === null) {
    return <Text>Loading...</Text>;
  }

  if (!hasPermission) {
    return <Text>No access to camera.</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <PostUploadScreenUpSide flash={flash} handleFlashMode={handleFlashMode} />
      <PostUploadScreenDownSide
        isCameraReady={isCameraReady}
        isRecording={isRecording}
        handleTakePicture={handleTakePicture}
        handleStartRecording={handleStartRecording}
        handleStopRecording={handleStopRecording}
        handleFlipCamera={handleFlipCamera}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
});

export default PostUploadScreen;
