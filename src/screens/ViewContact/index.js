import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import Input from '../../component/Input';
const ViewContact = (props) => {
    const item = props?.route?.params?.data
    console.log(props,"<--data")
  return (
    <SafeAreaView style={styles?.container}>
     <View style={styles?.header}>
     <TouchableOpacity onPress={()=>{props?.navigation?.goBack()}}>
    
         <Text style={{color:'blue'}}>
         Contacts
         </Text>
     </TouchableOpacity>
     
     <Text style={styles?.star}>{item?.isFavorite?"⭐️ ":null}</Text>
     </View>
     <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
    marginHorizontal:25
  }}
/>
<View style={styles?.subConatiner}>
    <View style={styles?.imageDetail}>
    <Image
    resizeMode='contain'
    style={styles?.img}
    source={{uri:item?.largeImageURL}}
    />
<Text style={styles?.name}>{item?.name}</Text>
</View>
<View
  style={{
      top:20,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
    marginHorizontal:25
  }}
/>
<View>
{item?.emailAddress &&<Input 
value={item?.emailAddress}
label={"Email"}
/>
}
<Input 
value={item?.birthdate}
label={"BIRTHDATE"}
/>
{item?.companyName &&
<Input 
value={item?.companyName}
label={"COMPNAY Name"}
/>
}
{item?.address &&<Input 
value={item?.address}
label={"ADDRESS"}
/>
}
{item?.phone?.home &&<Input 
value={item?.phone?.home}
label={"Phone"}
rightLabel = {"home"}
/>
}
{item?.phone?.work &&<Input 
value={item?.phone?.work}
label={"Phone"}
rightLabel = {"work"}
/>
}
{item?.phone?.mobile && <Input 
value={item?.phone?.mobile}
label={"Phone"}
rightLabel = {"mobile"}
/>
}
</View>
</View>
    </SafeAreaView>
  )
}

export default ViewContact

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        paddingBottom:10
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    img:{
        height:150,
        width:130
    },
    subConatiner:{
    
        paddingTop:50
    },
    name:{
        fontWeight:'500',
        fontSize:22
    },
    imageDetail:{
        alignItems:'center',
    }
})