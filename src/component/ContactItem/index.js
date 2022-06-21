import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const ContactItem = (props) => {
    const item = props?.title
   
  return (
      <TouchableOpacity onPress={()=>{props?.navigation?.navigate('ViewContact',{
          data: props?.title
      })}}>
    <View style={styles.container}>
    <Image resizeMode='contain' style={styles?.img} source={{uri:item?.smallImageURL}}/>
    <View style={[styles?.subConatiner,{paddingLeft:item?.isFavorite ?null:20}]}>
        <View style={{flexDirection:'row'}}>
            <Text style={styles?.star}>{item?.isFavorite?"⭐️ ":null}</Text>
    <Text style={styles?.nameShow}>{item?.name}</Text>
    </View>
   <View >
    {item?.companyName?
    <Text style={[styles?.company,{paddingLeft:item?.isFavorite ?45:20}]}>
        {item?.companyName}
    </Text>:null}
    </View>
    </View>
 
</View>
<View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    marginHorizontal:30
  }}
/>
    </TouchableOpacity>
  )
}

export default ContactItem

const styles = StyleSheet.create({
    container:{
  flexDirection:'row',
  paddingHorizontal:20,
  paddingVertical:20
    },
img:{
        height:50,
        width:50
    },
    nameShow:{
 alignSelf:"center",
 fontSize:18,
 fontWeight:'700'
  } ,
  subConatiner:{
      flexDirection:'column'
  } ,
  company:{
      paddingTop:5,
      textAlign:'left'
  },
  star:{
      paddingLeft:20
  }
})