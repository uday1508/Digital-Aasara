import { View, Text, Image, StyleSheet,StatusBar } from 'react-native'
import React ,{useState}from 'react'
import { responsiveHeight, responsiveWidth } from '../../responsive'
import TextInput from '../../components/TextInput'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import Button from '../../components/Button'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
export default function Login() {
    const [email, setEmail] = useState({ value:"", error: '' })
    const [password, setPassword] = useState({ value:"", error: '' })
    const navigation = useNavigation();
    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        console.log(emailError,password,"jjjj")
        if ( passwordError || emailError) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
        }else{
          navigation.navigate('HomeStack');
        }
    }
  return (
    <View style={{backgroundColor:'#f0f0f0',height:'100%',alignItems:'center',justifyContent:'space-around'}}>
    
        <Image source={require('../../assets/logo2.jpeg')} resizeMode='stretch' style={styles.img}/>
        <StatusBar backgroundColor={'#f0f0f0'}/>

        <View style={{alignItems:'center'}}>

               <LottieView autoPlay loop source={require('../../json/helphands.json')} style={{height:responsiveHeight(30),width:responsiveWidth(90)}}/>

        <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="default"
        activeOutlineColor='green'
        outlineColor='black'
        style={{width:responsiveWidth(97),height:responsiveHeight(6)}}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        outlineColor='black'
        activeOutlineColor='green'
        style={{width:responsiveWidth(97),height:responsiveHeight(6)}}
      />

      <Button onPress={()=>{onLoginPressed()}} buttonColor='darkgrey' style={styles.btn}><Text style={{color:'white'}}>Sign in</Text></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{borderRadius:responsiveHeight(6),height:responsiveHeight(6),width:responsiveWidth(12),position:'absolute',top:responsiveHeight(1),left:responsiveHeight(1)},
    btn:{width:responsiveWidth(49),marginTop:responsiveHeight(3)}
})