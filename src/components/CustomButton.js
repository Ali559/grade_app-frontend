import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
const Custombutton = ({
  width,
  height,
  onPress,
  color,
  textColor,
  borderRadius,
  borderThickness,
  borderColor,
  marginVertical,
  justifyContent = "center",
  alignItems = "center",
  title,
  fontSize,
  fontWeight,
}) => {
  const styles = StyleSheet.create({
    button: {
      width,
      height,
      backgroundColor: color,
      borderRadius,
      borderWidth: borderThickness,
      borderColor,
      marginVertical,
      justifyContent,
      alignItems,
    },
    buttonText: {
      fontSize,
      fontWeight,
      color: textColor,
    },
  });
  return (
    <View>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Custombutton;
