import { Text, StyleSheet, View, Dimensions, ScrollView, Image, Pressable, Linking} from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MobilePic from '../../Image/MobilePic';
import { dish_like } from '../../Data/data'
import { dish } from '../../Data/data'


function CookScreen() {

  browseLink = (dish_name) => {
    var URL = 'https://hurrythefoodup.com/?s='+dish_name
    
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
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <ScrollView>
          <Text style={[styles.h1, {flex:1}]}>You may try these.</Text>
          <View Style={[styles.DishType]}>
            {
              dish_like.map((item, index) => (
                <View style={[styles.subTypeLike]}>
                  <Image style={[styles.ItemImage]} source={MobilePic[item.img]} />
                  <View style={[styles.contentstyle]}>
                    <View style={[styles.namestyle]}>
                    <Text style={[styles.h2]}>{item.name}</Text>
                    <Text>
                      <Ionicons name='cube' size={15} color={'grey'}></Ionicons>
                      {" Ingredient Needed: "+item.ingredient}
                    </Text>
                    </View>
                    <Pressable onPress={ () => browseLink(item.name)}>
                      <Image style={[styles.RecipeIcon]} source={MobilePic["recipe_icon_like"]} />
                    </Pressable>
                  </View>
                </View>
              ))
            }
          </View>
          <View Style={[styles.DishType]}>
            {
              dish.map((item, index) => (
                <View style={[styles.subType]}>
                  <Image style={[styles.ItemImage]} source={MobilePic[item.img]} />
                  <View style={[styles.contentstyle]}>
                  <View style={[styles.namestyle]}>
                    <Text style={[styles.h2]}>{item.name}</Text>
                    <Text>
                      <Ionicons name='cube' size={15} color={'grey'}></Ionicons>
                      {" Ingredient Needed: "+item.ingredient}
                    </Text>
                    </View>
                    <Pressable onPress={ () => browseLink(item.name)}>
                      <Image style={[styles.RecipeIcon]} source={MobilePic["recipe_icon"]} />
                    </Pressable>
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
export default CookScreen;

const styles = StyleSheet.create({
  DishType:{
    width: Dimensions.get('window').width/1.02,
    margin: 10,
  },
  subTypeLike: {
    borderWidth: 1,
    borderColor: 'rgb(255, 192, 0)',
    backgroundColor: 'white',
    shadowColor: 'rgb(255, 192, 0)',
    elevation: 10,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15

  },
  subType: {
    borderWidth: 1,
    borderColor: 'rgb(170, 211, 0)',
    backgroundColor: 'white',
    shadowColor: 'rgb(170, 211, 0)',
    elevation: 10,
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  contentstyle: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 30,
    justifyContent: 'space-between',
  },
  namestyle: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  ItemImage: {
    height: 129,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 22,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  RecipeIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 20
  },
  h1: {
    fontSize: 25,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10
  },
  h2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  }
})