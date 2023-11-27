import { View, Text, Image, StyleSheet,StatusBar,KeyboardAvoidingView, ScrollView, Modal } from 'react-native'
import React ,{useState}from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../responsive'
import TextInput from '../../components/TextInput'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import Button from '../../components/Button'
import LottieView from 'lottie-react-native'
import { nameValidator } from '../../helpers/nameValidator'
import { useNavigation } from '@react-navigation/native'
import DocumentPicker from 'react-native-document-picker';
export default function CreateOrg() {
  const [pickedDocument, setPickedDocument] = useState(null);
    const [email, setEmail] = useState({ value:"", error: '' })
    const [fname, setFname] = useState({ value:"", error: '' })
    const [lname, setLname] = useState({ value:"", error: '' })
    const [password, setPassword] = useState({ value:"", error: '' })
    const [vis,setVis] = useState(false);
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
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log(
        result.uri,
        result.type, // mime type
        result.name,
        result.size
      );

      setPickedDocument(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
        console.log('Document picker cancelled.');
      } else {
        console.error('Error picking document:', err);
      }
    }
  };
  return (
    <View style={{backgroundColor:'#f0f0f0',height:'100%',alignItems:'center'}}>
        <Image source={require('../../assets/logo2.jpeg')} resizeMode='stretch' style={styles.img}/>
        <StatusBar backgroundColor={'#f0f0f0'}/>
       
        <View style={{alignItems:'center',marginTop:responsiveHeight(5)}}>
        <Text style={{color:'black',fontSize:responsiveFontSize(3),fontWeight:'bold'}}>Register your {'\n'} OrganiZation </Text>
        <ScrollView style={{marginLeft:responsiveHeight(0.5)}}>
        {/* <LottieView source={require('../../json/signup.json')} style={{height:responsiveHeight(10),width:responsiveWidth(50)}} autoPlay loop/> */}
     
            <View style={{flexDirection:'row'}}>
                    <View>
                <TextInput 
                label="Organization Name"
                returnKeyType="next"
                value={fname.value}
                onChangeText={(text) => setFname({ value: text, error: '' })}
                error={!!fname.error}
                errorText={fname.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                activeOutlineColor='green'
                style={{width:responsiveWidth(96),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
            />
            </View>
           
            {/* <TextInput 
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
            /> */}
           
            </View>            
            <TextInput
        label="Addres"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="default"
        activeOutlineColor='green'
        outlineColor='black'
        style={{width:responsiveWidth(97),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
      />

                <View style={{flexDirection:'row',}}>
                    <View>
                <TextInput 
                label="People Count"
                returnKeyType="next"
                value={fname.value}
                onChangeText={(text) => setFname({ value: text, error: '' })}
                error={!!fname.error}
                errorText={fname.error}
                keyboardType="numeric"
                activeOutlineColor='green'
                style={{width:responsiveWidth(47),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
            />
               </View>
           
            <TextInput 
                label="Telephone"
                returnKeyType="next"
                value={lname.value}
                onChangeText={(text) => setLname({ value: text, error: '' })}
                error={!!lname.error}
                errorText={lname.error}
                textContentType="emailAddress"
                keyboardType="numeric"
                activeOutlineColor='green'
                style={{width:responsiveWidth(47),height:responsiveHeight(6),backgroundColor:'#f0f0f0',marginLeft:responsiveHeight(1)}}
            />
           
                </View>
                <Modal animationType="slide" transparent={false} visible={vis} onRequestClose={()=>{setVis(false)}}>
                    <LottieView autoPlay loop source={require('../../json/tree.json')} style={{height:responsiveHeight(50)}}/>
                    <Text style={{fontWeight:'bold',fontSize:responsiveFontSize(3),left:responsiveHeight(8.5)}}>Successfully Registered</Text>
                  </Modal>

                <View style={{flexDirection:'row',}}>
                    <View>
                <TextInput 
                label="Admin Name"
                returnKeyType="next"
                value={fname.value}
                onChangeText={(text) => setFname({ value: text, error: '' })}
                error={!!fname.error}
                errorText={fname.error}
                keyboardType="default"
                activeOutlineColor='green'
                style={{width:responsiveWidth(47),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
            />
               </View>
           
            <TextInput 
                label="Admin Telephone"
                returnKeyType="next"
                value={lname.value}
                onChangeText={(text) => setLname({ value: text, error: '' })}
                error={!!lname.error}
                errorText={lname.error}
                textContentType="emailAddress"
                keyboardType="numeric"
                activeOutlineColor='green'
                style={{width:responsiveWidth(47),height:responsiveHeight(6),backgroundColor:'#f0f0f0',marginLeft:responsiveHeight(1)}}
            />
           
                </View>

                <TextInput
                   label="Location"
                    returnKeyType="next"
                     value={email.value}
                       onChangeText={(text) => setEmail({ value: text, error: '' })}
                          error={!!email.error}
                          errorText={email.error}
                          textContentType="emailAddress"
                          keyboardType="default"
                          activeOutlineColor='green'
                          outlineColor='black'
                          style={{width:responsiveWidth(97),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
      />

<TextInput
                   label="Amount of Food Required"
                    returnKeyType="next"
                     value={email.value}
                       onChangeText={(text) => setEmail({ value: text, error: '' })}
                          error={!!email.error}
                          errorText={email.error}
                          textContentType="emailAddress"
                          keyboardType="default"
                          activeOutlineColor='green'
                          outlineColor='black'
                          style={{width:responsiveWidth(97),height:responsiveHeight(6),backgroundColor:'#f0f0f0'}}
      />
      
      

      <Button onPress={()=>{pickDocument()}} buttonColor='darkgrey' style={styles.Button}><Text style={{color:'white'}}>Upload.certificate</Text></Button>
      </ScrollView>
      <Button onPress={()=>{setVis(true)}} buttonColor='darkgrey' style={styles.Button}><Text style={{color:'white'}}>Register</Text></Button>

    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    img:{borderRadius:responsiveHeight(6),height:responsiveHeight(6),width:responsiveWidth(12),position:'absolute',top:responsiveHeight(1),left:responsiveHeight(1)},
    Button:{width:responsiveWidth(48),marginTop:responsiveHeight(3)}
})

