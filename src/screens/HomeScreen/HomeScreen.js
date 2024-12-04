import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button/Button'
import DrawerIcon from '../../assets/img/drawer.png';
import ProfileIcon from '../../assets/img/profile.png';
import Categories from '../../components/Categories/Categories';
import ProjectsList from '../../components/Projects/ProjectsList';
import { taskStatus } from '../../data/projects';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Button style={styles.menuButton}><Image source={DrawerIcon} style={styles.menuIcon}/></Button>
        <Button style={styles.menuButton}><Image source={ProfileIcon} style={styles.menuIcon}/></Button>
      </View>
      <View style={{padding:10}}>
        <Text style={{fontSize:24,fontWeight:'bold'}}>Hello, Pradeep!</Text>
        <Text>Have a nice day.</Text>
      </View>
      <View>
      <Categories data={taskStatus}/>
      </View>
      <ProjectsList />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,backgroundColor:'white'
    },
    menuButton:{
        backgroundColor:'transparent',width:28,margin:10
    },
    menuIcon:{
        width:28,height:28
    }
})