import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constans/colors';

const CustomButton = ({ onPress, children, style }) => {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed, style]} onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 4,
    backgroundColor: Colors.primary50,
    borderRadius: 5,
    elevation: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
});
