import React, { Component,useEffect,useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import {useTheme} from '@react-navigation/native';


const Restaurant = () => {
  const navigation = useNavigation(); 
  const theme = useTheme();

//   const dispatch = useDispatch()
//   const {data,loading} = useSelector((state)=>{
//     return state
// })
  const [data,setData] = useState([])
     const [loading,setLoading]= useState(true)
    

    // console.log(data,loading)
   
    const fetchData = async ()=>{
      await fetch("https://foodie-main.herokuapp.com/hotel/homeadd")
          .then(res=>res.json())
          .then(results=>{
    
            setData(results)
            setLoading(false)
            console.log(data,loading)
          })
              .catch(err=>{
                  Alert.alert("Something went wrong")
              })
  }

  useEffect(()=>{
     
      fetchData()
  },[])
       
     const renderList = ((item)=>{
    
      return (
        <View>
         
         <TouchableOpacity  onPress={()=>navigation.navigate('Detail',{item})}>    
    <View style={styles.card}>
    
    
     <View style={styles.cardImgWrapper}>
     
     
    
     <Image
         source={{uri:item.productname}}
         resizeMode="cover"
         style={styles.cardImg}
       />
     </View>
    
     
    
    <View style={styles.cardInfo}>
       <Text style={styles.cardTitle}>{item.productname}</Text>
       <View style={styles.rate}>
       
       <Text style={{fontWeight:'bold'}}>${item.rate}</Text>
       </View>
       <Text style={styles.cardDetails}>
       {item.description}
       </Text>
       <Text style={styles.cardDetails}>
       {item.hotelname}
       </Text>
    
       
     </View>
    
     
     </View>
    
     
    </TouchableOpacity> 
    
      
      </View>
    
    );
    }
           
      );
        
        
    
      return(
        <View style={{flex:1}}>
     
         <FlatList
               data={data}
               renderItem={({item})=>{
                 return renderList(item)
               }}
               keyExtractor={item=>item._id}
               onRefresh={()=>fetchData()}
               refreshing={loading}
               />
           
        </View>
      
    ) 
 }  


    

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  header:{
    flexDirection: 'row',
    marginBottom:5,
    marginTop:10,
    paddingBottom:5,
    height:40,
    paddingTop:5,
    paddingLeft:5,
  },
   text:{
    color:'#37af0c',
    fontSize: 33,
    paddingLeft:8,
  },
  searchfield:{
    flexDirection:'row',
    marginLeft:5,
    paddingTop:14,
    paddingBottom:10,
  },
   near:{
    color:'#4a4b50',
    fontSize:18,
    paddingLeft:8,
  },
    sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  rate:{

    flexDirection:'row',
    marginTop:3
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
   card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: 'limegreen',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'limegreen'
  },
  cardImgWrapper: {
    flex: 1,
    
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: 'limegreen',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#9d9d9f',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    marginTop:3,
    fontSize: 12,
    color: '#444',
    fontWeight:'bold'
  },
  texth:{
    color:'#4a4b50',
    fontSize: 13,
    paddingLeft:8,
    fontWeight:'bold'
  }

});