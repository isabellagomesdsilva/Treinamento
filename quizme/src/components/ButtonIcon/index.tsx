import React from 'react';
import {Image, PressableProps} from 'react-native';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

const imgLogoGoogle = require('../../assets/Images/LogoGoogle.png');
const imgLogoFb = require('../../assets/Images/LogoFb.png');
const dividerRed = require('../../assets/Images/SeparatorRed.png');
const dividerBlue = require('../../assets/Images/SeparatorBlue.png');

type buttonProps = PressableProps & {
  label?: string;
  google?: boolean;
  facebook?: boolean;
};

export const ButtonIcon = ({
  label,
  google,
  facebook,
  ...props
}: buttonProps) => {
  return (
    <Pressable {...props} style={google ? styles.google : styles.facebook}>
      {google ? (
        <>
          <Image style={styles.imgLogoGoogle} source={imgLogoGoogle} />
          <Image style={styles.divider} source={dividerRed} />
          <Text style={styles.buttonTextGoogle}>{label}</Text>
        </>
      ) : (
        <>
          <Image style={styles.imgLogoFacebook} source={imgLogoFb} />
          <Image style={styles.divider} source={dividerBlue} />
          <Text style={styles.buttonTextFacebook}>{label}</Text>
        </>
      )}
    </Pressable>
  );
};
