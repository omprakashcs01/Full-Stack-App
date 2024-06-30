import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomBottomNavigation from "../components/CustomBottomNavigation";
import CustomInput from "../components/CustomInput";
import SubmitButton from "../components/SubmitButton";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigation();
  const handleCreatePost = async () => {
    if (!title || !description) {
      return alert("Please enter a title and description");
    }

    setLoading(true);

    try {
      const response = await axios.post("/post/create-post", {
        title,
        description,
      });
      alert(response.data?.message);
      navigate.navigate("Home");
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ alignItems: "center", margin: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            CREATE A POST
          </Text>
        </View>
        <CustomInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          valueDescription={description}
          onChangeDescription={(text) => setDescription(text)}
        />
        <View style={{ marginBottom: 20 }}>
          <SubmitButton
            btnTitle="Create Post"
            handleSubmit={handleCreatePost}
          />
        </View>
      </ScrollView>
      <CustomBottomNavigation />
    </KeyboardAvoidingView>
  );
};

export default Post;

const styles = StyleSheet.create({});
