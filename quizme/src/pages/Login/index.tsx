import React from 'react';
import {View} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import {
  BackgroundImageLogin,
  Input,
  Button,
  InputPassword,
} from '../../components';
import {styles} from './styles';
import {Home, User} from '../../models';

type loginType = {
  email: string;
  password: string;
};

type navLog = StackNavigationProp<Home>;

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .required('Campo Obrigatório'),
  password: yup
    .string()
    .required('Campo Obrigatório')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    
});

const initialValues = {
  email: '',
  password: '',
};

export function Login() {
  const {navigate} = useNavigation<navLog>();

  const onSubmit = async (values: loginType) => {
    try {
      const resp = await api.post('/auth/login', {
        login: values.email,
        password: values.password,
      });
      const data: User = resp.data;
      const {access_token, user} = data;
      const formattedToken = JSON.stringify(access_token);
      const formattedUser = JSON.stringify(user);
      await AsyncStorage.setItem('user', formattedUser);
      await AsyncStorage.setItem('token', formattedToken);
      navigate('Home');
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Credenciais inválidas',
      });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={LoginSchema}>
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setFieldTouched,
        isValid,
      }) => (
        <View style={styles.containerLogin}>
          <BackgroundImageLogin />
          <Input editable placeholder="Email" placeholderTextColor="#020A32" />
          <InputPassword
            placeholder='Senha' placeholderTextColor="#020A32"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password', true)}
            error={
              touched.password && errors.password ? errors.password : undefined
            }
          />
          
        </View>
      )}
    </Formik>
  );
}
