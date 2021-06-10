import React, { Component } from 'react';
import {  Text, View,StyleSheet, TextInput, Button,ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DatePicker from '../task2/datePicker';
import printForm from '../printForm'
//import image from './images/image.jpg';
//import Dropdown from '../task2/dropDown';





class App extends Component{
    constructor(){
        super()
        this.state ={
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber:'',
            title:'',


        }
    }
    handleFirstname = (text) =>{
        this.setState ({firstName:text})
    }
    handleLastname = (text) =>{
        this.setState ({lastName:text})
    }
    handleEmail =(text) =>{
        this.setState({email:text})
    }
    handlePhonenumber = (text) =>{
        this.setState({phoneNumber:text})
    }



    submit(){

        
        //console.warn (this.state)
    // var formData = {
    //     firstName:{this.state.firstName},
    //     lastName:{this.state.lastName}
    // }

    // printForm.print(formData,data2,data3);
   
   //print page
//    var data;
//    printForm(printDate){
//        data=printData;
//    }(printDate){
//    data=printData;
// }


// <text>{data.firstName}</text>
        
    }
        
    render(){
        return(
            <View style = {styles.regform}>
                 
                <View>
                   <Text style={styles.header}>
                       Registration Form</Text> 
                </View>

                <Text><b>FirstName</b></Text> 
                    <TextInput style = {styles.input}
                        placeholder = 'FirstName' onChangeText = {this.handleFirstname}>
                    </TextInput>
                <Text><b>LastName</b></Text>
                    <TextInput style = {styles.input}
                        placeholder = 'LastName' onChangeText = {this.handleLastname}>
                    </TextInput>
                <Text><b>Email</b></Text>
                    <TextInput style = {styles.input}
                        placeholder = 'email' onChangeText = {this.handleEmail}>
                </TextInput>
                <Text><b>PhoneNumber</b></Text>
                    <TextInput style = {styles.input}
                        placeholder = 'PhoneNumber' onChangeText = {this.handlePhonenumber}>
                </TextInput>

            
                <View style = {styles.date} >
                    <Text style = {styles.dob}>
                        <b>Date Of Birth : </b>
                    </Text>
                    <Text>
                        <DatePicker/>
                    </Text>
                </View>

                <Text><b>Title</b></Text>
                <TextInput style = {styles.input}
                placeholder = 'Title' onChangeText = {(text) => {this.setState({title:text})}}>
                </TextInput>

                
                <View style ={{ width: "90%", margin: 20 }}>
                    <Button  title = "Submit" color = "blue"  onPress = {() => {this.submit()}} />   
                </View>
               

                
                
               
                
                
            </View>
             

            
        );
    }
}

const styles = StyleSheet.create({
regform : {
    
        textAlign:'center',
        backgroundColor:'lightblue',
        flex:1,
        alignSelf:'stretch',
        marginTop:StatusBar.currentHeight,
    
        
        
    },
header: {
    fontSize:24,
    color:'black',
    fontWeight:'bold',
    marginBottom:'40px',
    marginTop:'30px',
    textAlign:'center',
    backgroundColor:'blue',
    margin:20,
    borderRadius:'10px'

    

},
input:{
    
    width:'90%',
    backgroundColor:'white',
    padding:10,
    marginTop:10,
    marginBottom:10,
    marginLeft:'20px',
    borderRadius:'10px',

    
},
date:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    
},
dob:{
    marginLeft:'7%'
    
},
button: {
    padding: 20,
    fontSize: 15,
    fontFamily: "arial",
    width: 200,
    height: 40,
    textAlign: "center"
  },
  



}

);
export default App;
