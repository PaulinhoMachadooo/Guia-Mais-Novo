import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";
import { Link } from "expo-router";
import React from "react";

type Props = {
  data: Product;
};
export function ProductItem({ data }: Props) {
  return (
    <Link href={`/product/${data.id}`} asChild>
      <Pressable style={styles.container}>
        {/*<Image style={styles.img} source={{ uri: data.image }} /> */}
        <View style={styles.info}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 1.5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#CCCCCC",
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    paddingLeft: 15,
    color: "#555555",
  },
  description: {
    fontSize: 13,
    color: "#555555",
    marginBottom: 10,
  },
});
