import React from "react";
import { View, Text,  TouchableOpacity } from "react-native";
import { styles } from "./styles";


export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}