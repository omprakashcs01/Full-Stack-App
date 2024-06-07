import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import CustomBottomNavigation from "../components/CustomBottomNavigation";

const Account = () => {
  const [state] = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <Text>Account</Text>
      <Text>Name: {state?.user.name}</Text>
      <Text>Email: {state?.user.email}</Text>
      <Text>Role: {state?.user.role}</Text>

      <CustomBottomNavigation />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
