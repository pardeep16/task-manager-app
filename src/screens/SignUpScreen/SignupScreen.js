import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button/Button'
import SocialLogin from '../LoginScreen/SocialLogin'

const SignupScreen = ({goBack}) => {
  return (
    <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.signUpText}>Create Account</Text>
      <View style={{marginTop:40,width:'100%',alignItems:'center',gap:25}}>
            <TextInput placeholder='Enter Email' style={styles.inputField}
             inputMode='text' keyboardType='email-address' autoCapitalize='none'/>
            <TextInput placeholder='Enter password' style={styles.inputField} inputMode='text' secureTextEntry={true}/>
            <TextInput placeholder='Confirm password' style={styles.inputField} inputMode='text' secureTextEntry={true}/>
      </View>
      <Button label={'Sign Up'}/>
      <Button onPress={goBack} style={{backgroundColor:'white'}} label={'Already have an account'} variant='secondary'/>
      <SocialLogin />
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    signUpText:{
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