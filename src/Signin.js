import React, { useState} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
 
const signin=() =>{
    const navigation = useNavigation(); 
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone, setPhone] = useState(true);
    const [password,setPassword] = useState('')
   
    const SignUp = async()=>{
        await fetch("https://foodie-main.herokuapp.com/user/api/register",{
            method:"post",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                password,
            })
        })

        // .then(res=>res.json())
        // .then(result=>{
            .then( async (response) => {
                //  const statusCode = response.status;
                if (response.status == 404) {
                    Alert.alert('Registered successfully');
                }
    
            console.log(response)
            // Alert.alert(result)
            
            navigation.navigate('Home')
        })
    }
    
  
        return(
            <View style={styles.container}>

<TouchableOpacity style={styles.head} onPress={() =>
                      this.props.navigation.navigate('Login')
                    } >
<Icons name='chevron-left' size={38} color='#37af0c' style={styles.icon}  onPress={() =>
                      this.props.navigation.navigate('Login')
                    } />
          </TouchableOpacity>


                 <Text style={styles.Newuser}>New User?</Text>



                <TextInput style={styles.inputBox}
            
                onChangeText={(name) => setName({name})}
                underlineColorAndroid = "#9d9d9f"
                placeholder="Full Name" 
                placeholderTextColor = "#9d9d9f"
                selectionColor="#fff"
                keyboardType="email-address"
                
                />

<TextInput style={styles.inputBox}
                onChangeText={(email) => setEmail({email})} 
                underlineColorAndroid = "#9d9d9f"
                placeholder="Email Address"
              
                placeholderTextColor = "#9d9d9f"
               
                />






<TextInput style={styles.inputBox}
                onChangeText={(phone) => setPhone({phone})} 
                underlineColorAndroid = "#9d9d9f"
                
                placeholder="Phone Number"
                
                placeholderTextColor = "#9d9d9f"
               
                />
                
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => setPassword({password})} 
                
                underlineColorAndroid = "#9d9d9f"
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#9d9d9f"
                // ref={(input) => this.password = input}
                />
 
 <TouchableOpacity style={styles.button} onPress={() =>
                      SignUp()
                    } >
          <Text style={styles.buttonText}>Register Now</Text>
        </TouchableOpacity>
        
        
            </View>
            
            );
        
    }
    


 
const styles = StyleSheet.create({
    container: {
        
      height:'100%',
      width:'100%',
      backgroundColor:'black',
      textAlign: 'center',
     

    },
    head:{
        backgroundColor:'black',
        width:'20%',
        height:'10%'
        
    },

    inputBox: {
        width: Dimensions.get('window').width,
        backgroundColor: '#000', 
        paddingHorizontal:25,
        fontSize: 16,
        color: '#fff',
        marginVertical: 10,
        marginTop:14,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button: {
        width: Dimensions.get('window').width,
        height:50,
        left:15,
        backgroundColor:'#21680c',
        borderRadius: 5,
        marginVertical: 15,
        paddingVertical: 12,
        padding:100,
     

    },
  
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: "#9d9d9f",
        textAlign: 'center'
    },
    Newuser: {
        fontSize: 24,
        marginTop:-32,
        marginLeft:40,
        fontWeight: '500',
        color: '#ffffff',
        paddingVertical:10,
        paddingHorizontal:35
        
    },
    icon:{
        
        marginTop:28,
        marginLeft:15,
        marginBottom:6
 
        
    }
  
}
);
export default signin;