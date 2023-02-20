import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { meat } from '../../Data/data';
import MobilePic from '../../Image/MobilePic';
import { vege } from '../../Data/data';
import { frui } from '../../Data/data';

function IngredientScreen({ navigation }) {

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress= {() => navigation.navigate('Add')}>
        <Ionicons name='add' size={35} color={'white'}></Ionicons>
      </TouchableOpacity>
      ),
    });
  }, [navigation, setCount]);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView>
            <View style={[styles.IngredientType]}>
               <Text style={[styles.h1, {flex:1}]}>Meat</Text>
              {
                 meat.map((item, index) => (
                  <View style={[styles.subType, {flex:4}]}>
                    <View style={[styles.rowstyle]}>
                    <Image
                        style={[styles.ItemImage]}
                        source={MobilePic[item.img]}
                    />
                    </View>
                    <View style={[styles.rowstyle]}>
                    <Text style={[styles.h2]}>{item.name}</Text>
                    <Text>
                      <Ionicons name='time' size={20} color={'grey'}></Ionicons>
                      {item.date}
                    </Text>
                    </View>
                    <View style={[styles.rowstyle]}>
                    <Text>number</Text>
                    </View>
                  </View>
              ))
              }
            </View>
            <View style={[styles.IngredientType]}>
            <Text style={[styles.h1, {flex:1}]}>Vegetable</Text>
              {
                 vege.map((item, index) => (
                  <View style={[styles.subType, {flex:4}]}>
                    <View style={[styles.rowstyle]}>
                    <Image
                        style={[styles.ItemImage]}
                        source={MobilePic[item.img]}
                    />
                    </View>
                    <View style={[styles.rowstyle]}>
                    <Text style={[styles.h2]}>{item.name}</Text>
                    <Text>
                      <Ionicons name='time' size={20} color={'grey'}></Ionicons>
                      {item.date}
                    </Text>
                    </View>
                    <View style={[styles.rowstyle]}>
                    <Text>number</Text>
                    </View>
                  </View>
              ))
              }
            </View>
            <View style={[styles.IngredientType]}>
            <Text style={[styles.h1, {flex:1}]}>Fruit</Text>
              {
                 frui.map((item, index) => (
                  <View style={[styles.subType, {flex:4}]}>
                    <View style={[styles.rowstyle]}>
                    <Image
                        style={[styles.ItemImage]}
                        source={MobilePic[item.img]}
                    />
                    </View>
                    <View style={[styles.rowstyle]}>
                    <Text style={[styles.h2]}>{item.name}</Text>
                    <Text>
                      <Ionicons name='time' size={20} color={'grey'}></Ionicons>
                      {item.date}
                    </Text>
                    </View>
                    <View style={[styles.rowstyle]}>
                    <Text>number</Text>
                    </View>
                  </View>
              ))
              }
            </View>
        </ScrollView>
      </View>
    );
  }
export default IngredientScreen;

const styles = StyleSheet.create({
  IngredientType:{
    height: 240,
    width: Dimensions.get('window').width/1.02,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  subType: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'whitesmoke',
    margin: 5,
    borderRadius:15

  },
  rowstyle: {
    flexDirection: 'column',
    marginRight: 5
    
  },
  h1: {
    fontSize: 21,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  ItemImage: {
    height:95,
    width: Dimensions.get('window').width/3.02,
    borderTopLeftRadius:15,
    borderBottomLeftRadius: 15
  },
  h2: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold'
  }
})