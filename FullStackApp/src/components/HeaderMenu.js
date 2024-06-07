import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
const HeaderMenu = () => {
  const [state, setState] = useContext(AuthContext);

  const handleLogOut = async () => {
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
    Alert.alert("Log Out successfully");
  };
  return (
    <View>
      <TouchableOpacity onPress={handleLogOut}>
        <FontAwesome5
          name={"sign-out-alt"}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({});
