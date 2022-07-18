import React from 'react';
import {View, Text, Pressable, Image, Alert} from 'react-native';
import {styles} from './';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Log} from './Log';

import {BackgroundImageLogin, Button, ButtonIcon} from '../../components';

const imgLogo = require('../../assets/Images/Logo.png');
const imgLogoGoogle = require('../../assets/Images/LogoGoogle.png');
const imgLogoFb = require('../../assets/Images/LogoFb.png');
const dividerRed = require('../../assets/Images/SeparatorRed.png');
const dividerBlue = require('../../assets/Images/SeparatorBlue.png');

type navLog = StackNavigationProp<Log>;

type Log = {
  Log: undefined;
};

export function Access() {
  const {navigate} = useNavigation<navLog>();
  return (
    <View style={styles.container}>
      <BackgroundImageLogin/>
      <ButtonIcon label="Conectar com Google" google onPress={() => Alert.alert("Conectar com o Google")}/>
      <ButtonIcon label="Conectar com Facebook" facebook onPress={() => Alert.alert("Conectar com o Facebook")}/>
      <Button label="Logar conta QuizzMe!" />
      <View>
        <Pressable onPress={() => navigate('Log')} style={styles.buttonCreate}>
          <Text style={styles.buttonCreateLabel}>Criar conta</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        {/*<Pressable onPress={() => navigate('Create')} style={styles.button}>
          <Text style={styles.buttonLabel}>Criar conta</Text>
        </Pressable>*/}
      </View>
    </View>
  );
}
