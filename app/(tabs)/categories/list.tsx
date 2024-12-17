import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";
import React, { useEffect, useState } from "react";
import { data } from "../../../data";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Screen() {
  const [categories, setList] = useState(data.categories);
  const [search, setSearch] = useState("");

  const filterList = (item: string) => {
    const newList = data.categories.filter(
      (val) =>
        val.title.toLocaleLowerCase().indexOf(item.toLocaleLowerCase()) >= 0
    );
    setList(newList);
  };

  useEffect(() => {
    if (search !== null) {
      filterList(search);
    }
  }, [search]);

  function id(prevState: null): null {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#FFF",
          margin: 20,
          borderRadius: 30,
          flexDirection: "row",
          elevation:10,
          justifyContent:"space-around",
          alignItems:"center",
          padding: 10,
        }}
      >
        <MagnifyingGlassIcon size={hp(2.5)} color={"gray"} strokeWidth={3}/>
        <TextInput
          style={{ flex: 1, fontSize: 16, padding: 10 }}
          placeholder="Pesquisar..."
          onChangeText={(val) => setSearch(val)}
        />
      </View>

      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:10,
  },
  list: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});
