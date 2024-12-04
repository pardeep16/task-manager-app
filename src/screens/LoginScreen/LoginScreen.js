import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button/Button'
//import Button from '../../components/Button/Button'

import SignupScreen from '../SignUpScreen/SignupScreen';
import SocialLogin from './SocialLogin';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [isSignUp,setIsSignUp] = useState(false);
  const {navigate} = useNavigation();

  return (
    <ScrollView style={{flex:1,backgroundColor:'white'}} contentContainerStyle={{justifyContent:'center',alignItems:'center',flex:1}}>
      {!isSignUp && <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.loginText}>Login here</Text>
      <Text>Welcome Back!</Text>
      <View style={{marginTop:20,width:'100%',alignItems:'center',gap:25}}>
            <TextInput placeholder='Enter Email' style={styles.inputField}
             inputMode='text' keyboardType='email-address' autoCapitalize='none'/>
            <TextInput placeholder='Enter password' style={styles.inputField} inputMode='text' secureTextEntry={true}/>
      </View>
      <View style={{justifyContent:"center",alignItems:"flex-end",width:'100%'}}>
      <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10}}>
        <Text style={{color:'#176FF2'}}>Forgot your password?</Text>
      </TouchableOpacity>
      </View>
      <Button onPress={()=> navigate('Home')} label={'Sign In'}/>
      <Button onPress={()=> setIsSignUp(true)} label={'Create new account'} style={{backgroundColor:'white'}} variant='secondary'/>
      <SocialLogin />
      </View>}
      {isSignUp && <SignupScreen goBack={()=> setIsSignUp(false)}/>}
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
 loginText:{
    fontSize:34,
    color:'#176FF2',
    fontWeight:'bold'
    },
    inputField:{
        borderWidth:2,
        backgroundColor:'#F1F4FF',
        width:'90%',
        height:48,
        padding:8,
        borderColor:'#176FF2'
    }
})