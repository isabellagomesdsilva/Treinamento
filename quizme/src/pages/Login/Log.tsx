import React, {useEffect, useState} from 'react';
import {View, Image, TextInput, Pressable, Alert, Text} from 'react-native';

const logoHeader = require('../../assets/Images/LogoHeader.png');
const logoSmall = require('../../assets/Images/LogoSmall.png');

import {styles} from './styles';

export function Log() {
  return (
    <View style={styles.containerTelaLog}>
      <View style={styles.headerLog}>
        <Image source={logoHeader} style={styles.imgLog} />
        <Image source={logoSmall} style={styles.imgElipseLog} />
      </View>
      <View style={styles.bodyLog}>
        <TextInput
          style={styles.inputEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputPassword}
          placeholder="Senha"
          secureTextEntry
          enablesReturnKeyAutomatically
        />
        <Pressable
          onPress={() => Alert.alert('Entrar')}
          style={styles.buttonEntrar}>
          <Text style={styles.labelEntrar}>Entrar</Text>
        </Pressable>
        <Pressable
          onPress={() => Alert.alert('Esqueci meu acesso')}
          style={styles.buttonDados}>
          <Text style={styles.labelDados}>Esqueci meus dados de acesso</Text>
        </Pressable>
      </View>
    </View>
  );
}
