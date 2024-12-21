import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Image style={{width:280, height:100}}
                source={require('../../assets/guia-logo.png')}
            />

        
            <View style={{flexDirection:"row", padding:5, width:'80%'}}>
                 <Text style={{fontSize:20, fontWeight:"300", textAlign:'center'}}>O GUIA + é um projeto que foi densenvolvido para ajudar nas buscas por estabelecimentos e serviços da nossa cidade,
                    assim também como a divulgar os comércios e prestadores de serviços.    
                 </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
    },
});