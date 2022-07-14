import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

export const BackgroundImageLogin = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require("../../assets/Images/Logo.png")} />
    </View>
  );
}