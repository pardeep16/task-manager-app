import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchImg from '../../assets/img/search.png';
import Button from '../Button/Button';
const Search = () => {
  return (
    <Button style={{backgroundColor:'transparent',width:32,height:32}}><Image source={SearchImg} style={{width:28,height:28}}/></Button>
  )
}

export default Search

const styles = StyleSheet.create({})