import {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Control, Controller} from 'react-hook-form';

import {colors} from '@utils/colors';
import {EditableUser, EditableUserFields} from 'src/@types/user';

interface Props {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  control: Control<EditableUser, object>;
  name: EditableUserFields;
  rules?: object;
}

const CustomInput: FC<Props> = ({
  label,
  placeholder,
  multiline,
  control,
  name,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              placeholder={placeholder}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              multiline={multiline}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {error && (
              <Text style={{color: colors.error}}>{error?.message}</Text>
            )}
          </View>
        </View>
      )}
      rules={rules}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
  },
});

export default CustomInput;
