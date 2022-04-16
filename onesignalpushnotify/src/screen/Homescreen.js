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
const HomeScreen = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [EndReached, setEndReached] = useState(true);
  const [textData,setText]= useState("");
  const getdata = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&pagSize=100&apiKey=582191a990cf4546a5131c3925d1e3e2',
      );
      const json = await response.json();
      setdata(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const renderItem = item => {
    return (
      <TouchableOpacity
        style={{margin: 5, borderRadius: 2}}
        onPress={() => navigation.navigate('Detailsscreen', {data: item})}>
        <Image
          source={{uri: item.urlToImage}}
          style={{height: 100, width: 150}}
        />
        <Text
          style={{position: 'absolute', top: '25%', color: 'white'}}
          numberOfLines={1}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };
  const updateData =async () => {
    let pageinc = page + 1;
    setpage(pageinc);
    console.log('page', page);
    if(page==1 ||page==2)
    {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&pagSize=100&page='+page+'&apiKey=582191a990cf4546a5131c3925d1e3e2',
      );
      const json = await response.json();
      console.log("jon",json)
       setdata(json);
    } catch (error) {
      console.error(error);
    }
  }
  };
  const searchData =async ()=>{
      if(textData!="")
      {
        try {
          const response = await fetch(
            'https://newsapi.org/v2/everything?q='+textData+'coin&apiKey=582191a990cf4546a5131c3925d1e3e2',
          );
          const json = await response.json();
          console.log("jon",json)
          setdata(json);
        } catch (error) {
          console.error(error);
        }       
      }
      else{
        try {
          const response = await fetch(
            'https://newsapi.org/v2/top-headlines?country=us&pagSize=100&apiKey=582191a990cf4546a5131c3925d1e3e2',
          );
          const json = await response.json();
          setdata(json);
        } catch (error) {
          console.error(error);
        } 
      }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderData />
      <View style={{height: '100%', width: '100%', backgroundColor: 'gray'}}>
      <View style={{flexDirection:'row'}}>
      <TextInput style={{backgroundColor:'white',width:'80%'}} onChangeText={(text)=>setText(text)}/>
      <TouchableOpacity style={{justifyContent:'center',marginHorizontal:"5%"}} onPress={()=>searchData()}>
                <Icon name="search1" size={20} color="white" />
              </TouchableOpacity>
      </View>
        <View>
          <FlatList
            data={data.articles}
            numColumns={'2'}
            renderItem={({item}) => renderItem(item)}
            onEndReachedThreshold={0.03}
            onEndReached={EndReached ? () => updateData() : null}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
