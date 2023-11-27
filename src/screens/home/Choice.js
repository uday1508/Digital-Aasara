import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,StatusBar, Image, ImageBackground } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../responsive';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Choice = () => {
  const navigation = useNavigation();
  const Screen = ['CreateOrg','UpdateOrg','Donor','Volunteer']
  const choice = ['Register Institution','Update Institution Details','Donor','Volunteer']
  const img = [
    {path:'../../assets/register.jpeg'},
  {path:'../../assets/update.jpeg'},
{path:'../../assets/donor.jpeg'},
{path:'../../assets/volunteer.jpeg'}
]
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={'#f0f0f0'}/>
       <Image source={require('../../assets/logo2.jpeg')} resizeMode='stretch' style={styles.img}/>
              <View style={{flexWrap:'wrap',flexDirection:'row',height:responsiveHeight(50),width:responsiveWidth(90),marginTop:responsiveHeight(13)}}>
                      {choice.map((choice, index) => (
                        <View style={{flexDirection:'row',justifyContent:'space-between',borderRadius:100,backgroundColor:"darkgreen",overflow:'hidden',margin:1}} key={index}>
                          <ImageBackground 
                          source={index == 0 ? require('../../assets/register.jpeg'):index == 1 ? require('../../assets/update.jpeg'): index == 2? require('../../assets/donor.jpeg'):require('../../assets/volunteer.jpeg')} 
                          style={[styles.choiceButton,{borderRadius:responsiveHeight(10)}]}>
                            <TouchableOpacity  style={styles.choiceButton} onPress={()=>{navigation.navigate(Screen[index])}}>
                                 <Text style={styles.choiceText}>{choice}</Text>
                            </TouchableOpacity>
                            </ImageBackground>
                
                        </View>
                       ))}
              </View>
              
              <LottieView autoPlay loop source={require('../../json/tree.json')}  style={[styles.lotie]}/>
              
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:'#f0f0f0',
    height:responsiveHeight(100),
    justifyContent:'center',
  },
  choiceButton: {
    height:responsiveHeight(20),
    backgroundColor: 'lightgrey',
    alignItems:'center',
    margin:responsiveHeight(0.5),
    borderRadius: 50,
    width:responsiveWidth(40),
    alignItems: 'center',
    justifyContent:'center'  
  },
  choiceText: {
    color: 'maroon',
    fontSize: 18,
    margin:responsiveHeight(3),
    fontWeight:'bold'
  },
  img:{borderRadius:responsiveHeight(6),height:responsiveHeight(6),width:responsiveWidth(12),position:'absolute',top:responsiveHeight(1),left:responsiveHeight(1)},
   lotie:{height:responsiveHeight(40),width:responsiveWidth(70),zIndex:-1}
});

export default Choice;
