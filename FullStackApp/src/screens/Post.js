import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomBottomNavigation from "../components/CustomBottomNavigation";

const Post = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>post</Text>
      <CustomBottomNavigation />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
