import {
  FlatList,
  Image,
  ImageBackground,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import CardImg from '../../assets/img/card.png';
import CardBlur from '../../assets/img/cardblur.png';
import moment from 'moment';
import TaskView from '../TaskView/TaskView';
import { fetchProjects } from '../../api/fetchProjects';

const ProjectsList = () => {
  const [selectedCard,setSelectedCard] =useState('');
  const [projectRes,setProjectRes] = useState([]);

  useEffect(()=>{
    fetchProjects().then((res)=>{
      setProjectRes(res?.data);
    }).catch((err)=>{
      console.log("Error ",err);
    })
  },[]);

  const taskGroup = useMemo(()=>{
    const tasks = projectRes?.find((project)=> project.id === selectedCard)?.tasks;
    const group = {};
    tasks?.map((task)=>{
      const existingItem = task?.status;
      if(group[existingItem]){
        group[existingItem] = [...group[existingItem],task];
      }
      else{
        group[existingItem] = [task];
      }
    });

    const groupArray = Object.keys(group).map((key)=> {
        return {
          label:key,
          data:group[key]
        }
    });
    return groupArray;
  },[selectedCard,projectRes]);

  const Card = ({id, label, name, image, startDate}) => {
    return (
      <TouchableOpacity onPress={()=> setSelectedCard(id)} style={styles.card}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="stretch"
          source={selectedCard === id ?CardImg:CardBlur}>
          <View style={styles.cardContent}>
            <View style={{flexDirection: 'row', gap: 4}}>
              {image && (
                <Image source={image} style={{height: 28, width: 28}} />
              )}
              <Text style={[styles.text,{fontSize:16}]}>{label}</Text>
            </View>
            <Text style={[styles.text,{marginTop:20,fontSize:32,fontWeight:'bold'}]}>{name}</Text>
            <Text style={[styles.text,{bottom:0,position:'absolute',paddingVertical:10,paddingHorizontal:20}]}>{moment(startDate).format('MMMM Do YYYY')}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex:1,marginTop:20}}>
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={{paddingHorizontal: 10}}
      contentContainerStyle={{gap:10,marginRight:10}}
      horizontal
      data={projectRes}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Card {...item} />}
    />
    {selectedCard && <SectionList
    style={{paddingHorizontal:20,paddingVertical:10}}
    scrollEnabled={false}
    sections={taskGroup}
     keyExtractor={(item,index)=> item + index}
      renderItem={({item})=> <TaskView {...item}/>}
      renderSectionHeader={({section:{label}})=>(
        <Text style={{fontSize:24, fontWeight:'bold'}}>{label}</Text>
      )}
     />}

    </View>
  );
};

export default ProjectsList;

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 220,
    borderRadius: 16,
  },
  imageBackground: {
    height: '100%',
  },
  cardContent:{
    position:'absolute',
    padding:20,
    height:'100%'
  },
  text:{
     color:'white'
  }
});
