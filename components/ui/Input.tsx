import React from "react";
import { TextInput, StyleSheet, TextInputProps, StyleProp, TextStyle, ViewStyle } from "react-native";

interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ containerStyle, inputStyle, placeholder , ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.input, inputStyle]}
        placeholderTextColor="#999"
        placeholder={placeholder ? placeholder : "Enter text"}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 'auto',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    marginVertical: 8,
  },
});

export { Input };