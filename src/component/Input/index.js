import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
    console.log(props)
  return (
    <View style={{top:40,backgroundColor:'#fff',paddingBottom:20,paddingHorizontal:20}}>
      <Text style={styles?.label}>{props?.label}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',top:5}}>
      <TextInput
      style={styles?.inputBox}
      value={props?.label === "ADDRESS" ? `${props?.value?.street} ,${props?.value?.city},${props?.value?.state}, ${props?.value?.country},${props?.value?.zipCode}`:props?.value }
      editable={false}
      />
      {props?.rightLabel &&
      <Text style={{paddingRight:30, color:'#696969'}} >{props?.rightLabel}</Text>}
      </View>
      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 0.6,
    marginHorizontal:25,
    top:15
  }}
/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputBox:{
     fontWeight:'600'
    },
    label:{
       
        color:'#696969'
    }
})