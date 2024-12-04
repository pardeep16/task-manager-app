import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';




const Categories = ({data,isMultiple=false,onChange}) => {
  const [selectedCategory,setSelectedCategory]= useState([]);

  const onSelect = (id)=>{
    if(isMultiple){
      setSelectedCategory([id]);
      onChange && onChange(selectedCategory);
      return;
    }
    if(selectedCategory.includes(id)){
        setSelectedCategory(selectedCategory?.filter((item)=> item !== id));
    }
    else{
        setSelectedCategory([...selectedCategory,id]);
    }
    onChange && onChange(selectedCategory);
  }

  const Chip = ({label,id,index})=>{
    return (
        <TouchableOpacity onPress={()=> onSelect(id)} style={[styles.chip,selectedCategory.includes(id)?{backgroundColor:'#176FF2'}:{}]}>
            <Text style={selectedCategory.includes(id)?{color:'white'}:{}}>{label}</Text>
        </TouchableOpacity>
    )
}

  return (
    <ScrollView style={{width:'100%'}} showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.listContainer}>
      {data.map((item,index)=> <Chip key={index} {...item} index={index}/>)}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    listContainer:{
        gap:16,
        paddingLeft:10,
        marginTop:20,
    },
    chip:{
        backgroundColor:'#F1F4FF',
        borderRadius:16,
        alignItems:'center',
        height:40,
        justifyContent:'center',
        padding:10
    }
})