import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from "react";
import { Text, TextInputProps, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

type inputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export const InputPassword = ({ label, error, ...props }: inputProps) => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  return (
    <View style={styles.inputComponent}>
      <Text style={styles.label}>{label}</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            secureTextEntry={hidePass}
            {...props}
          />
          <TouchableOpacity
            onPress={() => setHidePass(!hidePass)}
            style={styles.icon}
          >
            {hidePass ? (
              <Icon name="eye" color="#939399" style={{fontSize:10, }} />
            ) : (
              <Icon name="eye-off" color="#939399" size={23} />
            )}
          </TouchableOpacity>
        </View>
      {error ? <Text style={styles.error}>{error}</Text> : undefined}
    </View>
  );
};