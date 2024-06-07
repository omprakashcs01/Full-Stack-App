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

  //default axios settings

  axios.defaults.baseURL ="http://192.168.56.1:8080/api/v1"

  //initial local strong data
  const loadLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    let loginData = JSON.parse(data);
    setState({ ...state, user: data?.user, token: data?.token });
    return loginData;
  };

  useEffect(() => {
    loadLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
