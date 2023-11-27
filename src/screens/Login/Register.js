import { View, Text,Image, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../responsive'
import Button from '../../components/Button'
import {useNavigation} from  '@react-navigation/native'
const Register = () => {
  const navigation = useNavigation();
 
  return (
    <View style={{alignItems:"center",backgroundColor:'white'}}>
        <StatusBar backgroundColor={'white'}/>
        <View style={{height:'100%',alignItems:'center'}}>
           <Image source={require('../../assets/logo.jpeg')} style={{width:responsiveWidth(100),height:responsiveHeight(30),resizeMode:'contain'}}/>
           <Text style={{color:'black',fontSize:responsiveFontSize(5),marginTop:responsiveHeight(1.5),fontWeight:'bold'}}>DIGITAL AASARA</Text>
           <Text style={{color:'olive',fontSize:responsiveFontSize(2.5),fontStyle:'italic',marginTop:responsiveHeight(1)}}>A HOPE FOR EVERY HEART</Text>

           <LottieView source={require('../../json/heart.json')} autoPlay loop style={{height:responsiveHeight(20),width:responsiveWidth(50),marginTop:responsiveHeight(3)}}/>

          <View style = {{marginTop:responsiveHeight(10)}}>
              <Button  buttonColor='darkgray' style={styles.btn} onPress = {()=>{navigation.navigate('Login')}}>
                        <Text style={{color:'white'}}>Login</Text>
              </Button>
              

              <Button buttonColor='darkgray' style={styles.btn} onPress = {()=>{navigation.navigate('Signup')}}>
                        <Text style={{color:'white'}}>Signup</Text>
              </Button>
          </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
   btn:{width:responsiveWidth(70),height:responsiveHeight(6)}
})