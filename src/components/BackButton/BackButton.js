import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import ArrowImg from '../../assets/img/arrow.png';

const BackButton = ({onPress}) => {
  return (
    <Button onPress={onPress} style={{backgroundColor:'transparent',width:32,height:32}}><Image source={ArrowImg}/></Button>
  )
}

export default BackButton

const styles = StyleSheet.create({})