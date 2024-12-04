import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import BackButton from '../../components/BackButton/BackButton'
import Search from '../../components/Search/Search'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button/Button'
import DatePickerModal from '../../components/DatePicker/DatePickerModal'
import DayOfMothList from '../../components/DayOfMonthList/DayOfMothList'
import { projects } from '../../data/projects'
import TaskView from '../../components/TaskView/TaskView'
import CreateTask from '../../components/CreateTask/CreateTask'

const ScheduleTasks = () => {
  const {navigate} = useNavigation();
  const [currentDate,setCurrentDate] = useState(new Date());
  const [isModalVisible,setIsModalVisible] = useState(false);
  const [isCreateTask,setIsCreateTask] = useState(false);

  const getMonth = useCallback(()=>{
    const options = {year:'numeric',month:'short'};
    return currentDate.toLocaleDateString('en-us',options);

  },[currentDate]);

  const tasks = useMemo(()=>{
      const tasksList= [];
      projects?.forEach((project)=>{
        project?.tasks?.forEach((task)=>{
          if((currentDate >= new Date(task?.startDate)) && 
             task?.status !== 'Completed'){
              tasksList.push(task);
          }
        })
      });
      return tasksList;
  },[currentDate]);

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
        <BackButton onPress={()=> navigate('HomeScreen')}/>
        <Search />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
        <Button onPress={()=> setIsModalVisible(true)} style={styles.dateButton}><Text style={styles.date}>{getMonth()}</Text></Button>
        <Button onPress={()=> setIsCreateTask(true)} label={'Add Task'} style={{width:120}}></Button>
      </View>
      <View>
      <DatePickerModal isVisible={isModalVisible} selectedDate={currentDate} handleDateChange={(date)=>{
        setCurrentDate(date);
        setIsModalVisible(false)
      }} onClose={()=> setIsModalVisible(false)}/>
      </View>
      <View style={{height:80}}>
      <DayOfMothList date={currentDate}/>
      </View>
      <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:24,fontWeight:'bold'}}>Tasks</Text>
        {!tasks?.length && <Text style={{alignSelf:'center'}}>No tasks found!</Text>}
        <FlatList data={tasks}
        style={{flex:1}}
         keyExtractor={(item,index)=> index.toString()}
         renderItem={({item})=> <TaskView  {...item}/>}
         />
         <CreateTask isVisible={isCreateTask} onClose={()=> setIsCreateTask(false)}/>
    </View>
  )
}

export default ScheduleTasks

const styles = StyleSheet.create({
  dateButton:{
    backgroundColor:'transparent',
    width:150,
    height:50,
    alignItems:'flex-start',
    justifyContent:'center',
    alignContent:'center'
  },
  date:{
    fontSize:24,
    fontWeight:'bold'
  }
})