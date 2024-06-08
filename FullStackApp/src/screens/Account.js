import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import CustomBottomNavigation from "../components/CustomBottomNavigation";
import axios from "axios";

const Account = () => {
  const [state, setState] = useContext(AuthContext);
  const { user, token } = state;
  const [name, setName] = useState(state?.user.name);
  const [email] = useState(state?.user.email);
  const [password, setPassword] = useState(state?.user.password);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `/auth/update`,
        {
          name,
          password,
          email,
        },
      
      );
      setLoading(false);
      let updatedData = JSON.stringify(data);
      setState({ ...state, user: updatedData?.updatedUser });
      Alert.alert(data && data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.error(error);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image
            style={{ height: 100, width: 100 }}
            source={{
              uri: "https://cdn-icons-png.freepik.com/256/149/149071.png?ga=GA1.1.1833424741.1712160349&semt=ais_hybrid",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Update profile
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", width: 70 }}>Name</Text>
          <TextInput
            style={{
              borderWidth: 1,
              width: 250,
              marginLeft: 10,
              backgroundColor: "#fff",
              fontSize: 16,
              paddingLeft: 10,
              borderRadius: 10,
              padding: 5,
            }}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", width: 70 }}>Email</Text>
          <TextInput
            style={{
              borderWidth: 1,
              width: 250,
              marginLeft: 10,
              backgroundColor: "#fff",
              fontSize: 16,
              paddingLeft: 10,
              borderRadius: 10,
              padding: 5,
              margin: 10,
            }}
            value={email}
            editable={false}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", width: 70 }}>Password</Text>
          <TextInput
            style={{
              borderWidth: 1,
              width: 250,
              marginLeft: 10,
              backgroundColor: "#fff",
              fontSize: 16,
              paddingLeft: 10,
              borderRadius: 10,
              padding: 5,
            }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", width: 70 }}>Role</Text>
          <TextInput
            style={{
              borderWidth: 1,
              width: 250,
              marginLeft: 10,
              backgroundColor: "#fff",
              fontSize: 16,
              paddingLeft: 10,
              borderRadius: 10,
              padding: 5,
            }}
            value={state?.user.name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              padding: 20,
              backgroundColor: "black",
              borderRadius: 10,
              marginHorizontal: 60,
              marginTop: 50,
              alignItems: "center",
            }}
            onPress={handleUpdate}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              {loading ? "Please Wait" : "Update profile"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomBottomNavigation />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
