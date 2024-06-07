import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import CustomBottomNavigation from "../components/CustomBottomNavigation";

const About = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text> About</Text>

      <CustomBottomNavigation />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
