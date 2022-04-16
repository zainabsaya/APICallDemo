import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {HeaderData} from './Componet/Header';
import Icon from 'react-native-vector-icons/AntDesign';
export default DetailsScreen = ({ navigation,route }) => {
  const {data} = route.params;
  console.log('data', route.params.data);
  return (
    <View style={{flex: 1}}>
    <View style={{height:'8%',width:'100%',backgroundColor:'green',flexDirection:'row',alignContent:'center',alignItems:'center',}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon name='back' size={30} />
    </TouchableOpacity>
        
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:'15%'}}>DetailsScreen</Text>
    </View>
      <View>
        <Image
          source={{uri: data.urlToImage}}
          style={{height: '70%', width: '100%'}}
        />
        <View style={{marginTop: 10,margin:10}}>
          <Text style={{fontSize: 15}}>{data.title}</Text>
          <View style={{margin: 5}}>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 15}}>Authrname: {data.author}</Text>
            </View>
            <Text style={{fontSize: 15}}>{data.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
