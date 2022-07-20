import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Login} from '../../models';

import {BackgroundImageLogin, Button, ButtonIcon} from '../../components';

type navLog = StackNavigationProp<Login>;

export function Access() {
  const {navigate} = useNavigation<navLog>();
  return (
    <View style={styles.container}>
      <BackgroundImageLogin />
      <ButtonIcon
        label="Conectar com Google"
        google
        onPress={() => Alert.alert('Conectar com o Google')}
      />
      <ButtonIcon
        label="Conectar com Facebook"
        facebook
        onPress={() => Alert.alert('Conectar com o Facebook')}
      />
      <Button label="Logar conta QuizzMe!" onPress={() => navigate('Login')} />
      <View>
        <Pressable
          onPress={() => Alert.alert('Criar conta QuizzMe!')}
          style={styles.buttonCreate}>
          <Text style={styles.buttonCreateLabel}>Criar conta</Text>
        </Pressable>
      </View>
    </View>
  );
}
