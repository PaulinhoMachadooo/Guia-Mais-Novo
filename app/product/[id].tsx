import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";
import { data } from "../../data";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const idProduct = parseInt(id as string);

  const product = getProductById(idProduct);
  if (!product) return router.back();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "" }} />
      <ScrollView style={styles.area}>
        <Image
          style={styles.img}
          source={{ uri: product.image }}
          resizeMode="cover"
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        

        <View style={{}}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingBottom: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(product.uriWhatsapp);
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={{ uri: product.imgWhat }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(product.uriInstagram);
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={{ uri: product.imgInst }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(product.uriFace);
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={{ uri: product.imgFace }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel:${product.uriTel}`);
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={{ uri: product.imgTel }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(product.uriMaps);
              }}
            >
              <Image
                style={{ height: 50, width: 50 }}
                source={{ uri: product.imgMaps }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.horasArea}>
           <Text style={styles.horas}> {product.horasTXT}</Text> 
           <Text style={styles.horasDescription}> {product.horasDescription1}</Text> 
           <Text style={styles.horasDescription}> {product.horasDescription2}</Text> 
        </View>
        
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    flex: 1,
    padding: 10,
  },
  buttonArea: {
    padding: 10,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 20,
  },
  horasArea: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#EBE9E9",
  },
  horas: {
    fontWeight:"bold",
    fontSize: 22,
    textAlign: "center",
    color:"#112342"
  },
  horasDescription: {
    fontSize:15,
    textAlign: "center",
    color:"#112342"
  },
});
