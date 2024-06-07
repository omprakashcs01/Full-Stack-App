import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const CustomBottomNavigation = () => {
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
        <Icon icon="home" text="Home" />
        <Icon icon="search" text="Browse" />
        <Icon icon="shopping-bag" text="Grocery" />
        <Icon icon="receipt" text="Orders" />
        <Icon icon="user" text="Account" />
      </View>
    </View>
  );
};

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
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
