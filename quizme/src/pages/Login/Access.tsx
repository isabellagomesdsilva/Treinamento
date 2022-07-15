import React from 'react';
import {View, Text, Pressable, Image, Alert} from 'react-native';
import {styles} from './';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Log} from './Log';

import  {BackgroundImageLogin, Button}  from '../../components';

const imgLogo = require('../../assets/Images/Logo.png');
const imgLogoGoogle = require('../../assets/Images/LogoGoogle.png');
const imgLogoFb = require('../../assets/Images/LogoFb.png');
const dividerRed = require("../../assets/Images/SeparatorRed.png");
const dividerBlue = require("../../assets/Images/SeparatorBlue.png")

type navLog = StackNavigationProp<Log>;

type Log = {
  Log: undefined;
};

export function Access() {
  const {navigate} = useNavigation<navLog>();
  return (
    <View style={styles.container}>
      {/*<BackgroundImageLogin />*/}
      <Button label="Logar conta QuizzMe!" options={true}/>
      <View style={styles.content}> 
        <Pressable onPress={() => Alert.alert('Connectar com o Google')} style={styles.buttonGoogle}>
        <Image style={styles.imgLogoGoogle} source={imgLogoGoogle}/>
        <Image style={styles.divider} source={dividerRed}/>
          <Text style={styles.buttonLabelGoogle}>Conectar com o Google</Text>
        </Pressable>
        <Pressable onPress={() => Alert.alert('Conectar com o Facebook')} style={styles.buttonFacebook}>
        <Image style={styles.imgLogoFb} source={imgLogoFb}/>
        <Image style={styles.divider} source={dividerBlue}/>
          <Text style={styles.buttonLabelFacebook}>Conectar com o Facebook</Text>
        </Pressable>
        <Pressable onPress={() => navigate('Log')} style={styles.buttonLogin}>
          <Text style={styles.buttonLoginLabel}>Logar conta QuizzMe!</Text>
        </Pressable>
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
