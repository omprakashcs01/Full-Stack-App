import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomInput = ({
  value,
  onChangeText,
  valueDescription,
  onChangeDescription,
}) => {
  return (
    <View style={{ flex: 1, marginHorizontal: 40 }}>
      <TextInput
        style={{
          borderWidth: 1,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          fontSize: 20,
        }}
        placeholder="Title for you post...."
        value={value}
        onChangeText={onChangeText}
      />

      <TextInput
        style={{
          marginTop: 40,
          borderWidth: 1,
          backgroundColor: "white",
          borderRadius: 10,
          fontSize: 20,
          padding: 10,
          textAlignVertical: "top", // Aligns text to the top
          height: 150, // Initial height,
        }}
        value={valueDescription}
        onChangeText={onChangeDescription}
        multiline={true}
        placeholder="description for you post...."
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
