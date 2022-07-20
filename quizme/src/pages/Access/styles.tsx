import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333B65',
    height: '100%',
  },
  content: {},
  footer: {},
  buttonCreate:{
    alignItems:  "center"
  },
  buttonCreateLabel:{
    color: "#F1F6FB",
    fontSize: 25,
    fontFamily: "YanoneKaffeesatz-Bold",
    textDecorationLine: "underline"
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
