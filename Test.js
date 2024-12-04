import React from "react";
import { View,Text, TextInput, SafeAreaView, Button, StyleSheet, useColorScheme, Appearance} from "react-native";

export default function Test(){
  const val = useColorScheme();
  console.log(val);
   return (
    <SafeAreaView style={styles.container}>
        <View style={styles.darkModeTextHolder}>
          <Text style={styles.darkModeText}>hello BSDK</Text>
        </View>
        <View style={styles.darkModeTextHolder}>
          <Text style={styles.darkModeText}>hello BSDKBSDK</Text>
        </View>
       
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:"#D3D3D3"
  },
  darkModeTextHolder:{
    backgroundColor:"#000000",
    padding:10,
    margin:10,
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center',
    

  },
  darkModeText:{
    color:"#ffffff",
    backgroundColor:"#555555",
  }
})