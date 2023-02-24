import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView, Dimensions, Image, Linking, Pressable} from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MobilePic from '../../Image/MobilePic';
import { community } from '../../Data/data';

function CommunityScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
             <ScrollView>
               <Text style={[styles.h1, {flex:1}]}>Share your comments.</Text>
                <View Style={[styles.CommunityType]}>
                  {
                    community.map((item, index) => (
                      <View style={[styles.subTypeLike]}>
                        <Image style={[styles.ItemImage]} source={MobilePic[item.img]} />
                        <View style={[styles.personstyle]}>
                          <Image style={[styles.personimage]} source={MobilePic[item.person]} />
                          <Text style={[styles.communityh2]}>{item.author}</Text>
                        </View>
                        <View style={[styles.contentstyle]}>
                          <Text>
                            <Text style={{fontWeight:"bold",color:"black",fontSize: 17,color:'dodgerblue'}}>Ingredients: </Text>
                            <Text style={[styles.communityh3]}>{item.ingredient}</Text>
                          </Text>
                          <Text>
                            <Text style={{fontWeight:"bold",color:"black",fontSize: 17,color:'dodgerblue'}}>Comments: </Text>
                            <Text style={[styles.communityh3]}>{item.description}</Text>
                            </Text>

                          <View style={[styles.communityverticalStyle]}>
                            <Ionicons name='thumbs-up-outline' size={20} color={'darkorange'}></Ionicons>
                            <Text>
                              <Text style={{fontWeight:"bold",color:"black"}}> Liked by:</Text>
                              <Text style={[styles.communityh3]}>{item.liked}</Text>
                            </Text>
                          </View>
                        </View>

                      </View>
                    ))
                  }
                </View>
             </ScrollView>
      </View>
    );
  }
export default CommunityScreen;

const styles = StyleSheet.create({

CommnuityType:{
    width: Dimensions.get('window').width/1.02,
    flexDirection: 'column',
  },

subTypeLike: {
    borderWidth: 1,
    borderColor: 'deepskyblue',
    backgroundColor: 'white',
    shadowColor: 'deepskyblue',
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

ItemImage: {
    height: 160,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 22,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  communityverticalStyle: {
    flexDirection: 'row',
  },

 personstyle: {
    flexDirection: 'row',
    marginLeft: 10,
    alignContent: 'center'
  },

  comment: {
    flexDirection: 'row',
    alignContent: 'center'
  },

 personimage: {
      width: 30,
      height: 30,
      resizeMode: "contain",
      left: 0,
      top: 5
    },

 contentstyle: {
    flexDirection: 'column',
    margin: 5,
  },

h1: {
    fontSize: 25,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10
  },

  communityh2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 5
  },

  communityh3: {
    fontSize: 15,
    color: 'black',
    marginTop: 0,
  },

})