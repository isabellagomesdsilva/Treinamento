import React from 'react';
import {Text, TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from './styles';

type inputProps = TextInputProps & {
  label?: string;
  error?: string;
  editable?: boolean;
  validation?: boolean;
};

export const Input = ({
  label,
  error,
  validation,
  editable,
  ...props
}: inputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={validation ? true : false}
        placeholder={!editable ? 'Desabilitado' : ''}
        editable={validation ? false : editable}
        style={
          editable
            ? validation
              ? styles.validation
              : styles.input
            : styles.disabledInput
        }
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : undefined}
    </View>
  );
};
