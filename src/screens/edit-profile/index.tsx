import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {user} from '@assets/data/user';
import EditProfileScreenChangeProfileImage from '@components/edit-profile/change-profile-image';
import CustomInput from '@components/shared/input';
import {colors} from '@utils/colors';
import {fontSizes, fontWeights} from '@utils/fonts';
import {EditableUser} from 'src/@types/user';
import {URL_REGEX} from '@utils/constants';

interface Props {}

const EditProfileScreen: FC<Props> = props => {
  const {control, handleSubmit} = useForm<EditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: EditableUser) => console.log(data);

  return (
    <View style={styles.container}>
      <EditProfileScreenChangeProfileImage image={user?.image} />
      <CustomInput
        control={control}
        label="Name"
        name="name"
        placeholder="Your Name"
        rules={{required: 'Name is required'}}
      />

      <CustomInput
        control={control}
        label="Username"
        name="username"
        placeholder="Your Username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 characters!',
          },
        }}
      />
      <CustomInput
        control={control}
        label="Website"
        name="website"
        placeholder="Your Website"
        rules={{
          pattern: {value: URL_REGEX, message: 'Please enter a valid website'},
        }}
      />
      <CustomInput
        control={control}
        label="Bio"
        name="bio"
        placeholder="Your Bio"
        multiline={true}
        rules={{
          maxLength: {
            value: 200,
            message: 'Username should be less than 200 characters!',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  textButton: {
    color: colors.primary,
    marginTop: 20,
    fontWeight: fontWeights.semi,
    fontSize: fontSizes.md,
  },
});

export default EditProfileScreen;
