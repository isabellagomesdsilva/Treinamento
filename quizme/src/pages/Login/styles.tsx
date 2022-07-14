import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {},
  footer: {},
  imgLogo: {
    marginTop: '30%',
    marginBottom: '25%',
  },
  buttonGoogle: {
    backgroundColor: '#F1F6FB',
    width: 300,
    height: 50,
    borderColor: '#EA4335',
    borderWidth: 2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  buttonLabelGoogle: {
    color: '#EA4335',
    fontSize: 21,
    fontFamily: "YanoneKaffeesatz-Regular"
  },
  imgLogoGoogle: {
    marginRight: '5%',
    marginLeft: '5%',
  },
  divider: {
    marginRight: '5%',
  },
  buttonFacebook: {
    backgroundColor: '#F1F6FB',
    width: 300,
    height: 50,
    borderColor: '#475993',
    borderWidth: 2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  buttonLabelFacebook: {
    color: '#475993',
    fontSize: 21,
    fontFamily: "YanoneKaffeesatz-Regular"
  },
  imgLogoFb: {
    marginRight: '4%',
    marginLeft: '4%',
  },
  buttonLogin: {
    backgroundColor: '#FFC90B',
    width: 300,
    height: 75,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
    justifyContent: 'center',
  },
  buttonLoginLabel: {
    color: '#5970E7',
    fontSize: 28,
    fontFamily: "YanoneKaffeesatz-Bold"
  },
  buttonCreate:{
    alignItems:  "center"
  },
  buttonCreateLabel:{
    color: "#F1F6FB",
    fontSize: 25,
    fontFamily: "YanoneKaffeesatz-Bold",
    textDecorationLine: "underline"
  },
  containerTelaLog:{
    backgroundColor: '#E5E5E5',
    width: "100%",
    height: "100%",
    display: "flex",
  },
  headerLog:{
    backgroundColor: '#333B65',
    height: "10%",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyLog:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgLog:{
    marginTop: "15%"
  },
  imgElipseLog:{
    marginTop: "-19%"
  },
  inputEmail:{
    marginTop: "40%",
    marginBottom: "10%",
    backgroundColor: "#F1F6FB",
    borderColor: "#F1F6FB",
    borderWidth: 1,
    borderRadius: 10,
    width: "72%",
    fontFamily: "YanoneKaffeesatz-Regular",
    fontSize: 18,
    elevation: 8,
  },
  inputPassword:{
    backgroundColor: "#F1F6FB",
    borderColor: "#F1F6FB",
    borderWidth: 1,
    borderRadius: 10,
    width: "72%",
    marginBottom: "10%",
    fontFamily: "YanoneKaffeesatz-Regular",
    fontSize: 18,
    elevation: 8,
  },
  buttonEntrar:{
    display: "flex",
    marginBottom: "5%",
    backgroundColor: "#FFC90B",
    width: "50%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    borderRadius: 10,
  },
  buttonDados:{

  },
  labelEntrar:{
    fontFamily: "YanoneKaffeesatz-Regular",
    fontSize: 18
  },
  labelDados:{
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "YanoneKaffeesatz-Regular",
    fontSize: 18, 
    textDecorationLine: "underline"
  }
});
