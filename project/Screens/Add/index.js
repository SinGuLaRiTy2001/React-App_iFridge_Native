import { Text, StyleSheet, View, Button, Dimensions, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
import React, { Component } from 'react'

function AddScreen() {

  const [value, onChangeText] = React.useState('');
  const [valuecategory, onChangeTextcategory] = React.useState('');
  const [valueamount, onChangeTextamount] = React.useState('');
  const [valuedate, onChangeTextdate] = React.useState('');


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
            <TextInput
              style={[styles.addinput]}
              placeholder='Category'
              onChangeText={text => onChangeTextcategory(text)}
              value={valuecategory}
            />
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
            <TextInput
              style={[styles.addinput]}
              placeholder='Date'
              onChangeText={text => onChangeTextdate(text)}
              value={valuedate}
            />
          </View>
          </View>
          <View style={[styles.addtype2, {flex:1}]}>
            <View style={[styles.addbutton]}>
              <Button 
              title='Cancle' 
              color='grey'
              onPress={()=>{
                onChangeText('')
                onChangeTextcategory('')
                onChangeTextamount('')
                onChangeTextdate('')
              }}/>
              <Button title='Add it!' color='green'/>
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
    height: Dimensions.get('window').height-200,
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
    fontWeight: 'bold'
  },
  addname:{
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
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
    alignContent: 'space-around'
  },
  addbutton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-around'
  },
  addinput: {
    height: 40, 
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    marginLeft: 20,
    width: Dimensions.get('window').width-80,
  }
})