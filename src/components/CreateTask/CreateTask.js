import React, { lazy, useCallback, useState } from 'react'
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BackButton from '../BackButton/BackButton'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Button from '../Button/Button';
import Categories from '../Categories/Categories';
import { categoriesLsit } from '../../data/categories';

const CreateTask = ({isVisible,onClose}) => {
   const [pickerMode,setPickerMode] = useState('date');
   const [pickerVisible,setPickerVisible] = useState(false);
   const [errors,setErrors] = useState({});
   const [task,setTask] = useState({
    startDate:new Date(),
   });

   const handleOnConfirm = useCallback((date)=>{
        if(pickerMode === 'date'){
            //setStartDate(date);
            setTask({
                ...task,
                'startDate':date
            });
        }
        else if(pickerMode === "start"){
            setTask({
                ...task,
                'startTime':date
            })
        }
        else if(pickerMode === "end"){
            setTask({
                ...task,
                'endTime':date
            })
        }
        setPickerVisible(false);
   },[pickerMode]);
   const handleOnCancel= useCallback(()=>{
    setPickerVisible(false);
   },[]);

   const displayPicker = useCallback((mode)=>{
    setPickerMode(mode || 'date');
    setPickerVisible(true);
   },[]);
   const onHandleChange = useCallback((name,value)=>{
    console.log("Change ",name,value);
        setTask({
            ...task,
            [name]:value
        });

        if(errors[name]){
            setErrors({
                ...errors,
                [name]:''
            })
        }
   },[task]);

   const onSubmit = useCallback(()=>{
        if(!task.name){
            setErrors({
                ...errors,
                'name':'Task name is required.'
            })
        }
        else{
            setErrors({});
        }
        console.log("Task ",task);
   },[task])

  return (
    <Modal visible={isVisible} animationType='slide' transparent={true} onRequestClose={onClose}>
        <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
                <BackButton onPress={onClose} />
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Create a Task</Text>
                </View>
            </View>
            <ScrollView>
                <Text style={styles.label}>Name</Text>
                <TextInput value={task?.name} onChangeText={(value)=> onHandleChange('name',value)} placeholder='Task name' style={styles.input}/>
                <Text>{errors?.['name']}</Text>
                <Text style={styles.label}>Date</Text>
                <TouchableOpacity onPress={()=> displayPicker('date')} style={styles.input}>
                    <Text style={styles.dateText}>{task?.startDate.toDateString() || 'Select date'}</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row',gap:20,marginTop:20}}>
                    <View>
                    <Text style={styles.label}>Start Time</Text>
                <TouchableOpacity onPress={()=> displayPicker('start')} style={styles.input}>
                    <Text style={styles.dateText}>{task?.startTime && moment(task?.startTime)?.format('LT') || 'Select..'}</Text>
                </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={styles.label}>End Time</Text>
                <TouchableOpacity onPress={()=> displayPicker('end')} style={styles.input}>
                    <Text style={styles.dateText}>{task?.endTime && moment(task?.endTime)?.format('LT') || 'Select..'}</Text>
                </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                <Text style={styles.label}>Description</Text>
                <TextInput placeholder='Enter task description' onChangeText={(value)=> onHandleChange('description',value)} multiline numberOfLines={4} style={[styles.input,{height:80}]}/>
                </View>
                <Categories onChange={(value)=> onHandleChange('category',value)} isMultiple={true} data={categoriesLsit}/>
            </ScrollView>

            <DatePicker date={task?.startDate} modal open={pickerVisible} mode={pickerMode === 'date' ? 'date':'time'} onConfirm={handleOnConfirm}
                onCancel={handleOnCancel}
            />
            <View style={{flex:1,bottom:0,position:'absolute',width:'100%',paddingHorizontal:10}}>
                <Button onPress={onSubmit} label={'Create Task'} style={{width:'100%',margin:10,height:48}}/>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        backgroundColor:'white',
        padding:10
    },
    modalHeader:{
        flexDirection:'row',
        height:70,
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'gray',
        padding:5,
        fontSize:16
    },
    label:{
        paddingVertical:10,
        fontSize:16
    },
    dateText:{
        fontSize:16
    }
})

export default CreateTask