import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const Button = ({label,style,onPress,variant="primary",children}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.button,style,pressed?{opacity:0.5}:{}]}>
    {!children && <Text style={[styles.text,variant!=='primary'?{color:'black'}:{}]}>{label}</Text>}
    {children}
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
 button:{
    backgroundColor:'#176FF2',
    width:'90%',
    alignItems:'center',
    height:42,
    alignContent:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:8
 },
 text:{
    color:'white',
    fontSize:16
 }
})