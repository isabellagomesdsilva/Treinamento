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
