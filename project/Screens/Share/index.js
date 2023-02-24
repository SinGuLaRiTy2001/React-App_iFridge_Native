import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput, Button, Dimensions} from 'react-native'
import React from 'react'

export default function Sharesreen () {

    const [value, onChangeText] = React.useState('');
  return (
    <KeyboardAvoidingView 
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    enabled={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
      <Text style={[styles.sharetitle]}>Write your comments here</Text>
      <View style={[styles.sharebox]}>
        <View style={[styles.sharetype1, {flex:6}]}>
         <View>
          <TextInput
            style={[styles.shareinput]}
            multiline
            numberOfLines={5}
            textAlignVertical='top'
            placeholder='Comments'
            onChangeText={text => onChangeText(text)}
            value={value}
            //numberOfLines={5}
          />
        </View>
        </View>
        <View style={[styles.sharetype1, {flex:1}]}>
          <View style={[styles.addbutton]}>
            <Button title='Share!' color='deepskyblue'/>
          </View>
        </View>
      </View>
      </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    sharetitle: {
        marginTop: 10,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    sharebox: {
        width: Dimensions.get('window').width-40,
        backgroundColor: 'white',
        shadowColor: 'grey',
        elevation: 20,
        marginTop: 10,
        flexDirection: 'column',
        borderRadius: 10
    },
    sharetype1: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: 10
    },
    shareinput: {
        width: Dimensions.get('window').width-80,
    }
})