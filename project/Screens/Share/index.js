import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput, Button, Dimensions, Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { previouspic } from '../../Data/data';
import MobilePic from '../../Image/MobilePic';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Sharesreen () {

    const [value, onChangeText] = React.useState('');

    browseLink = (share_text) => {
      var URL = 'https://twitter.com/intent/tweet?text='+share_text
      
      Linking.canOpenURL(URL).then(supported => {         
        // if (!supported) {            
        //     console.warn('Can\'t handle url: ' + URL);            
        // } else {
        //     return Linking.openURL(URL);            
        // }   
        return Linking.openURL(URL);         
      }).catch(err => console.error('An error occurred',URL));
    }

    browseLink2 = (share_pre) => {
      var URL = 'https://twitter.com/Yuxia_group_6/status/'+share_pre
      
      Linking.canOpenURL(URL).then(supported => {         
        // if (!supported) {            
        //     console.warn('Can\'t handle url: ' + URL);            
        // } else {
        //     return Linking.openURL(URL);            
        // }   
        return Linking.openURL(URL);         
      }).catch(err => console.error('An error occurred',URL));
    }

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
            numberOfLines={3}
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
            <Button 
            title={'Share!'} 
            color='deepskyblue'
            onPress={ () => browseLink(value)}
            />
            </View>
            <View style={[styles.addbutton]}>
            <Button 
            title='Cancle' 
            color='grey'
            onPress={ () => onChangeText('')}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.sharetitle]}>View previous comments here</Text>
      <View style={[styles.backpre]}>
        {
        previouspic.map((item, index) => (
        <View style={[styles.precomment]}>
          <Image
            style={[styles.ShareImage]}
            source={MobilePic[item.img]}
          />
          <View style={[styles.subshare]}>
           <Text style={[styles.subsharetext]}>{item.name}</Text>
           <View style={[styles.subcontent]}>
            <View style={[styles.timeback]}>
             <Ionicons name='calendar-outline' size={25} color={'grey'}></Ionicons>
              <Text style={[styles.subsharetime]}>{item.date}</Text>
            </View>
             <TouchableOpacity 
             onPress={ () => browseLink2(item.link)}
             >
              <Ionicons 
              style={[styles.shareicon]}
              name='logo-twitter' size={30} color={'deepskyblue'}></Ionicons>
             </TouchableOpacity>
           </View>
          </View>
        </View>
        ))
        }
     </View>
      </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    sharetitle: {
        marginTop: 10,
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sharebox: {
        width: Dimensions.get('window').width-20,
        backgroundColor: 'white',
        shadowColor: 'grey',
        elevation: 20,
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
    },
    addbutton: {
      margin: 5
    },
    precomment:{
      width: Dimensions.get('window').width-20,
      backgroundColor: 'white',
      shadowColor: 'deepskyblue',
      elevation: 20,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    backpre:{
     backgroundColor: 'white',
     borderTopLeftRadius:10,
     borderTopRightRadius: 10,
    },
    ShareImage:{
      height:120,
      width: Dimensions.get('window').width/2.5,
      borderTopLeftRadius:10,
      borderBottomLeftRadius: 10,
      resizeMode: 'contain',
    },
    subshare:{
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },
    subsharetext: {
      marginRight: 28,
      fontSize: 19,
      color: 'gray',
      fontWeight: 'bold',
    },
    subcontent:{
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    subsharetime:{
      fontSize: 18,
      color: 'gray',
    },
    timeback: {
      flexDirection:'row',
      marginRight:5
    },
    shareicon: {
      marginRight:20
    }
})