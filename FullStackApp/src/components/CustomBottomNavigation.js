import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const CustomBottomNavigation = () => {
  const navigation = useNavigation();

  const route = useRoute();
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <Icon
          icon="home"
          text="Home"
          onPress={() => navigation.navigate("Home")}
          color={route.name === "Home" && "blue"}
        />
        <Icon
          icon="plus-square"
          text="Post"
          onPress={() => navigation.navigate("Post")}
          color={route.name === "Post" && "blue"}
        />
        <Icon
          icon="info-circle"
          text="About"
          onPress={() => navigation.navigate("About")}
          color={route.name === "About" && "blue"}
        />
        <Icon
          icon="user"
          text="Account"
          onPress={() => navigation.navigate("Account")}
          color={route.name === "Account" && "blue"}
        />
      </View>
    </View>
  );
};

const Icon = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        color={props.color}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default CustomBottomNavigation;
