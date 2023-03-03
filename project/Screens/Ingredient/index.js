import { Text, StyleSheet, View, Button, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { meat } from '../../Data/data';
import MobilePic from '../../Image/MobilePic';
import { vege } from '../../Data/data';
import { frui } from '../../Data/data';

function IngredientScreen({ navigation }) {

  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);
  const [count5, setCount5] = React.useState(0);
 

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
               <Text style={[styles.h1, {flex:2}]}>Meat</Text>
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
                    <TouchableOpacity title='counter' onPress={()=>{
                      if(item.counter==1){
                        setCount1(count1+1)
                      }else{
                        setCount(count+1)
                      }
                      
                    }}>
                    <Ionicons name='add-circle' size={25} color={'grey'}></Ionicons>
                    </TouchableOpacity>
                    <View>
                      {
                        item.set ? (<Text style={[styles.content]}>{count}</Text>) : (<Text style={[styles.content]}>{count1}</Text>)
                      }
                    </View>
                    <TouchableOpacity title='counter' onPress={()=>{
                      if(item.counter==1){
                        setCount1(count1-1)
                      }else{
                        setCount(count-1)
                      }
                      
                    }}>
                    <Ionicons name='remove-circle' size={25} color={'grey'}></Ionicons>
                    </TouchableOpacity>
                    </View>
                  </View>
              ))
              }
            </View>
            <View style={[styles.IngredientType]}>
            <Text style={[styles.h1, {flex:2}]}>Vegatables</Text>
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
                    <TouchableOpacity title='counter' onPress={()=>{
                      if(item.counter==1){
                        setCount3(count3+1)
                      }else{
                        setCount2(count2+1)
                      }
                      
                    }}>
                      <Ionicons name='add-circle' size={25} color={'grey'}></Ionicons>
                    </TouchableOpacity>
                    <View>
                      {
                        item.set ? (<Text style={[styles.content]}>{count2}</Text>) : (<Text style={[styles.content]}>{count3}</Text>)
                      }
                    </View>
                    <TouchableOpacity title='counter' onPress={()=>{
                      if(item.counter==1){
                        setCount3(count3-1)
                      }else{
                        setCount2(count2-1)
                      }
                      
                    }}>
                    <Ionicons name='remove-circle' size={25} color={'grey'}></Ionicons>
                    </TouchableOpacity>
                    </View>
                  </View>
              ))
              }
            </View>
            <View style={[styles.IngredientType]}>
            <Text style={[styles.h1, {flex:2}]}>Fruits</Text>
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
                    <TouchableOpacity title='counter' onPress={()=>{
                      if(item.counter==1){
                        setCount5(count5+1)
                      }else{
                        setCount4(count4+1)
                      }
                      
                    }}>
                      <Ionicons name='add-circle' size={25} color={'grey'}></Ionicons>
                    </TouchableOpacity>
                    <View>
                      {
                        item.set ? (<Text style={[styles.content]}>{count4}</Text>) : (<Text style={[styles.content]}>{count5}</Text>)
                      }
                    </View>
                    <TouchableOpacity title='counter' onPress={()=>{
                      if(item.counter==1){
                        setCount5(count5-1)
                      }else{
                        setCount4(count4-1)
                      }
                      
                    }}>
                      <Ionicons name='remove-circle' size={25} color={'grey'}></Ionicons>
                    </TouchableOpacity>
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
    marginRight: 10,
    
  },
  h1: {
    fontSize: 25,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  ItemImage: {
    height:86,
    width: Dimensions.get('window').width/3.02,
    borderTopLeftRadius:15,
    borderBottomLeftRadius: 15,
    resizeMode: 'contain',
  },
  h2: {
    fontSize: 21,
    color: 'grey',
    fontWeight: 'bold'
  },
  content: {
    textAlign:'center'
  }
})

