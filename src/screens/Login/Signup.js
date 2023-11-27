import { View, Text, Image, StyleSheet,StatusBar,KeyboardAvoidingView } from 'react-native'
import React ,{useState}from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../responsive'
import TextInput from '../../components/TextInput'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import Button from '../../components/Button'
import LottieView from 'lottie-react-native'
import { nameValidator } from '../../helpers/nameValidator'
import { useNavigation } from '@react-navigation/native'
export default function Signup() {
    const [email, setEmail] = useState({ value:"", error: '' })
    const [fname, setFname] = useState({ value:"", error: '' })
    const [lname, setLname] = useState({ value:"", error: '' })
    const [password, setPassword] = useState({ value:"", error: '' })
    const navigation = useNavigation();
    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        const namev = nameValidator(fname.value)
        const name = nameValidator(lname.value)
        console.log(emailError,password,"jjjj")
        if ( passwordError || emailError || name || namev) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          setFname({ ...fname, error: namev })
          setLname({ ...lname, error: name })
        }else{
          navigation.navigate('HomeStack')
        }
    }
  return (
    <View style={{backgroundColor:'#f0f0f0',height:'100%',alignItems:'center'}}>
        <Image source={require('../../assets/logo2.jpeg')} resizeMode='stretch' style={styles.img}/>
        <StatusBar backgroundColor={'#f0f0f0'}/>
        <View style={{alignItems:'center',marginTop:responsiveHeight(5)}}>
        <Text style={{color:'black',fontSize:responsiveFontSize(5),fontWeight:'bold'}}>Sign Up</Text>
        <LottieView source={require('../../json/signup.json')} style={{height:responsiveHeight(10),width:responsiveWidth(50)}} autoPlay loop/>
        <KeyboardAvoidingView>
            <View style={{flexDirection:'row'}}>
                    <View>
                <TextInput 
                label="First Name"
                returnKeyType="next"
                value={fname.value}
                onChangeText={(text) => setFname({ value: text, error: '' })}
                error={!!fname.error}
                errorText={fname.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                activeOutlineColor='green'
                style={{width:responsiveWidth(47),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
            />
            </View>
            <KeyboardAvoidingView>
            <TextInput 
                label="Last Name"
                returnKeyType="next"
                value={lname.value}
                onChangeText={(text) => setLname({ value: text, error: '' })}
                error={!!lname.error}
                errorText={lname.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="default"
                activeOutlineColor='green'
                style={{width:responsiveWidth(47),height:responsiveHeight(6),backgroundColor:'#f0f0f0',marginLeft:responsiveHeight(1)}}
            />
            </KeyboardAvoidingView>
            </View>
            
            <KeyboardAvoidingView>
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
        style={{width:responsiveWidth(97),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
      />
      </KeyboardAvoidingView>
      <View>
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
        style={{width:responsiveWidth(97),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
      />
      </View>

      <View>
      <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        outlineColor='black'
        activeOutlineColor='green'
        style={{width:responsiveWidth(97),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
      />
      </View>
      </KeyboardAvoidingView>
      <Button onPress={()=>{onLoginPressed()}} buttonColor='darkgrey' style={styles.button}><Text style={{color:'white'}}>Sign up</Text></Button>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{borderRadius:responsiveHeight(6),height:responsiveHeight(6),width:responsiveWidth(12),position:'absolute',top:responsiveHeight(1),left:responsiveHeight(1)},
    Button:{width:responsiveWidth(48),marginTop:responsiveHeight(3)}
})

