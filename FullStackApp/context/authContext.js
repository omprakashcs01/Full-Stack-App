import { StyleSheet, Text, View } from "react-native";
import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

//providers
//global STATE
const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

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
