import { StyleSheet, Text, View } from "react-native";
import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthContext = createContext();

//providers
//global STATE
const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  let token = state && state.token;
  //initial local strong data
  const loadLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    let loginData = JSON.parse(data);
    setState({ ...state, user: loginData?.user, token: loginData?.token });
    return loginData;
  };

  useEffect(() => {
    loadLocalStorageData();
  }, []);

  //default axios settings

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.baseURL = "http://192.168.56.1:8080/api/v1";

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
