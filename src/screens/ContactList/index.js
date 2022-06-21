import { StyleSheet, Text, View,SafeAreaView,SectionList } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ContactItem from '../../component/ContactItem'

const ContactList = (props) => {
  const [dataList,setDataList] = useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData = async() =>{
   const apiData = await axios.get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
   const favList = apiData?.data?.filter(itm=>itm?.isFavorite)
   const sortFavList = favList.sort((a, b) => a.name.localeCompare(b.name))
   const unFavList =apiData?.data?.filter(itm=>!itm?.isFavorite)
   const sortUnFavList = unFavList.sort((a, b) => a.name.localeCompare(b.name))
   setDataList([
       {title:"Favorite Contacts",data:sortFavList},{title:"Other Contacts",data:sortUnFavList}
   ])
 
    }

    console.log(dataList)
  return (

    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <View style={styles?.mainheader}>
        <Text style={styles.mainheader}>CONTACTS</Text>
        </View>
       {dataList   && <SectionList
      sections={dataList}
      renderItem={({ item }) => <ContactItem title={item} navigation={props?.navigation} />}
      renderSectionHeader={({ section: { title } }) => (
          <View style={styles?.header}>
        <Text style={styles.header}>{title}</Text>
        </View>
      )}
    />
      }
    </SafeAreaView>
  )
}

export default ContactList

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#D3D3D3',
        marginHorizontal:10,
        paddingVertical:2,
        fontWeight:'700'
    },
    mainheader:{
        backgroundColor:'#fff',
        marginHorizontal:10,
        paddingVertical:2,
        fontWeight:'700',
        textAlign:'center'
    }
})