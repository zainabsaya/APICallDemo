import React,{useEffect} from 'react';

import {Text, View,SafeAreaView,StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../const/color';
import Icon from 'react-native-vector-icons/AntDesign';


export const HeaderData = ()=>{
    return(
        
            <View style={styles.header}>
              <View style={styles.headline}>
                    <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Top headlines</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={styles.icon}>
                <Icon name="search1" size={20} color="black"/>
                
              </TouchableOpacity>
              <TouchableOpacity>
              <Icon name="filter" size={20} color="black"/>
              </TouchableOpacity>
              </View>
            </View>
        
    )
}


const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'7%',
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:2,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginHorizontal:5
        

    },
    headline:{
        justifyContent:'center'
    },
    icon:{
        justifyContent:'flex-end',
   marginHorizontal:'2%'
    }
})