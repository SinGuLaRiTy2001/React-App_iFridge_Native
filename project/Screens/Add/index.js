import { Text, StyleSheet, View, Button, Dimensions, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Alert} from 'react-native'
import React, { Component } from 'react'
import {Picker} from '@react-native-picker/picker';


function AddScreen() {

  const [value, onChangeText] = React.useState('');
  const [valueamount, onChangeTextamount] = React.useState('');
  const [valuedate, onChangeTextdate] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = React.useState();

    var date = new Date();
 
    var year = date.getFullYear().toString();
    var month = (date.getMonth()+1).toString();
    var day = date.getDate().toString();


    return (
      <KeyboardAvoidingView 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      enabled={true}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
        <Text style={[styles.addtitle]}>What we got here</Text>
        <View style={[styles.addbox]}>
          <View style={[styles.addtype1, {flex:6}]}>
           <View>
            <Text style={[styles.addname]}>Name</Text>
            <TextInput
              style={[styles.addinput]}
              placeholder='Name'
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
          <View>
            <Text style={[styles.addname]}>Category</Text>
            <View style={[styles.catagorybox]}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Vegetable (default)" value="vegatable" />
              <Picker.Item label="Meat" value="meat" />
              <Picker.Item label="Fruit" value="fruit" />
            </Picker>
            </View>
          </View>
          <View>
            <Text style={[styles.addname]}>Amount</Text>
            <TextInput
              style={[styles.addinput]}
              placeholder='Amount'
              onChangeText={text => onChangeTextamount(text)}
              value={valueamount}
            />
          </View>
          <View>
            <Text style={[styles.addname]}>Date</Text>
            <View style={[styles.catagorybox]}>
            <Text style={[styles.datacontent]}>{year+'-'+month+'-'+day}</Text>
            </View>
            
          </View>
          </View>
          <View style={[styles.addtype2, {flex:1}]}>
            <View style={[styles.addbutton]}>
              <Button 
              title='Cancle' 
              color='grey'
              onPress={()=>{
                onChangeText('')
                onChangeTextamount('')
              }}/>
              <Button 
                title='Add it!' 
                color='green'
                onPress={()=>{
                  onChangeTextdate(year+'-'+month+'-'+day)
                  Alert.alert('New ingredient has been added!')
                }}
                />
            </View>
          </View>
        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
export default AddScreen;

const styles = StyleSheet.create({
  addbox: {
    //height: Dimensions.get('window').height-200,
    width: Dimensions.get('window').width-40,
    backgroundColor: 'white',
    shadowColor: 'grey',
    elevation: 20,
    marginTop: 10,
    flexDirection: 'column',
    borderRadius: 10
  },
  addtitle: {
    marginTop: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    //marginTop: 20
  },
  addname:{
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  addtype1: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  addtype2: {
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    marginTop: 40,
    marginBottom:20
  },
  addbutton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    marginTop: 20
  },
  addinput: {
    height: 40, 
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    marginLeft: 20,
    width: Dimensions.get('window').width-80,
  },
  catagorybox:{
    height: 45, 
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    marginLeft: 20,
    width: Dimensions.get('window').width-80,
  },
  datacontent: {
    fontSize: 16,
    color: 'black',
    marginTop: 20,
    marginLeft: 20
  }
})