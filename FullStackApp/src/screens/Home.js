import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { CustomBottomNavigation } from "../components/CustomBottomNavigation";
import { AuthContext } from "../../context/authContext";

const Home = () => {
  const [state] = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      <Text>{JSON.stringify(state, null, 4)}</Text>
      <CustomBottomNavigation />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
