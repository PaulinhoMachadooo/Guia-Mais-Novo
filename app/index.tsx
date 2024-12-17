import { SafeAreaView, StyleSheet, Image, useWindowDimensions } from "react-native";
import  { useEffect } from 'react';
import { useRouter } from "expo-router";
import React from "react";

export default function Screen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/home");
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/guia+logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#112342",
  },
  logo: {
    width: 310,
    height: 110,
    marginBottom: 100,
  },
});