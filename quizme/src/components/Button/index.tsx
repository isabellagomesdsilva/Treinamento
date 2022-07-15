import React from 'react';
import {ActivityIndicator, PressableProps} from 'react-native';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

type buttonProps = PressableProps & {
  label?: string;
  disabled?: boolean;
  white?: boolean;
  logout?: boolean;
  menuBlue?: boolean;
  menuWhite?: boolean;
  remove?: boolean;
  options?: boolean;
  isLoading?: boolean;
};

export const Button = ({
  label,
  white,
  disabled = false,
  logout,
  menuBlue,
  menuWhite,
  remove,
  options,
  isLoading,
  ...props
}: buttonProps) => {
  return (
    <Pressable
      style={
        disabled
          ? styles.disabled
          : logout
          ? styles.logout
          : menuBlue
          ? styles.menuBlue
          : menuWhite
          ? styles.menuWhite
          : remove
          ? styles.remove
          : options
          ? styles.options
          : styles.button
      }
      {...props}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color="white" />
      ) : (
        <Text
          style={
            disabled
              ? styles.buttonTextDisabled
              : logout
              ? styles.buttonTextLogout
              : menuBlue
              ? styles.buttonTextMenuBlue
              : menuWhite
              ? styles.buttonTextMenuWhite
              : remove
              ? styles.buttonTextRemove
              : options
              ? styles.buttonTextOptions
              : styles.buttonText
          }>
          {label}
        </Text>
      )}
    </Pressable>
  );
};
