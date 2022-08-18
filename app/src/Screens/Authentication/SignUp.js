import { Text, View, Image, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleChevronLeft, faFile,faTriangleExclamation, faEnvelope, faUser, faCircleUser, faMobileScreenButton, faLock, faBriefcase, faEye, faEyeSlash, faSquareCheck, } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../Component/Logo';
import {styles} from '../../../styles/SignUp';
import auth from "@react-native-firebase/auth"
import { faCircleCheck} from '@fortawesome/free-regular-svg-icons/faCircleCheck'

const SignUp = (props) => {
    
const[ userType,setUserType] = useState("0");
const[nameSurname,setNameSurname] = useState('');
const[email,setEmail] = useState('');
const[phone,setPhone] = useState('');
const[password,setPassword] = useState('');
const[passwordAgain,setPasswordAgain] = useState('');
const[isPhone,setisPhone] = useState(false);
const[isEmail,setisEmail] = useState(false);
const[visibleBox1,setVisibleBox1] = useState(true);
const[visibleBox2,setVisibleBox2] = useState(true);
const[isApprove,setisApprove] = useState(false);
const[isApproveKVKK,setisApproveKVKK] = useState(false);
const[errorSituation,setErrorSituation] = useState(false);
const[success,setSuccess] = useState(false);
const[errorMessage,setErrorMessage] = useState(false);

/*const defaultReducer = useSelector(state => state.default);
const dispatch = useDispatch();
const[USER,setUSER] = useState(defaultReducer.USER); 
const[NEW_USER_REQUEST_STATUS,setNEW_USER_REQUEST_STATUS] = useState();
const[NEW_USER_REQUEST_ERROR,setNEW_USER_REQUEST_ERROR] = useState(defaultReducer.NEW_USER_REQUEST_ERROR);  
const[NEW_USER_SUCCESS_MESSAGE,setNEW_USER_SUCCESS_MESSAGE] = useState(defaultReducer.NEW_USER_SUCCESS_MESSAGE); 
  postNewUser = (type, name, email, number, password) => {
    dispatch({
      type: $.POST_NEW_USER,
      payload: {
        type,
        name,
        email,
        password,
        phone: {
          country: "90",
          number
        },
      }
    })
  }
    /*useEffect(()=>{
    if(NEW_USER_REQUEST_STATUS==3 && errorMessage!=NEW_USER_REQUEST_ERROR){
        setErrorMessage(NEW_USER_REQUEST_ERROR)
        errorPopup()
      }
      if(NEW_USER_REQUEST_STATUS==2 ){
        successPopup()
      }
  })*/

  const successPopup = () => {
    if (!success) {
      setSuccess(true)
      setTimeout(() => {
        if (success) {
          props.navigation.navigate("Login");
          console.log("succes");
        }
      }, 2000);
    }
  }

  const errorPopup = () => {
    if (!errorSituation) {
      setErrorSituation(true)
      setTimeout(() => {
        if (errorSituation) {
          setErrorSituation(false)
        }
      }, 5000);
    }
  }

  const __doCreateUser = async () => {
    try {
      let response = await auth().createUserWithEmailAndPassword(email, password)
      if (response) {
        console.log(response)
        props.navigation.navigate('Test')
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  let phoneRegex = new RegExp(/[0]{0,1}5[0-9]{9}/);

  const controlValue = async  () => {
    try {
      if (nameSurname.length < 1 || email.length < 1 && phone.length < 1) {
       setErrorMessage("Alanlar boş geçilemez. " )
        errorPopup()
      }
      else {
        if (password.length < 6 || passwordAgain.length < 6) {
          setErrorMessage("Şifre en az 6 karakterli olmalı. ")
          errorPopup()
        }
        else {
          if (password != passwordAgain) {
            setErrorMessage( "Şifreler eşleşmiyor. " )
            errorPopup()
          }
          else {
            if (!isApprove || !isApproveKVKK) {
              setErrorMessage( "Sözleşmeleri okumalı ve onaylamalısınız." )
              errorPopup()
            }
            else {
              if (!isEmail) {
                setErrorMessage( "Doğru email girdiğinizden emin olun" )
                errorPopup()
              }
              else {
                if (!isPhone) {
                  setErrorMessage( "Doğru telefon girdiğinizden emin olun" )
                  errorPopup()
                }
                else {
                  console.log("sonuc")
                  __doCreateUser()
                }
              }
            }
          }
        }
      }
    }
    catch (error) {
        console.log(error);
    }
  }

    return (
      <View style={styles.Body}>
        <ScrollView>
          <SafeAreaView style={styles.Container}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backButton}>
              <FontAwesomeIcon icon={faCircleChevronLeft} size={20} color="#0069B4" />
              <Text style={styles.backButtonText}>Geri Dön</Text>
            </TouchableOpacity>
            <Logo width={115} height={75} style={styles.Logo} />
            <Text style={styles.tittle}>Kayıt Ol</Text>
          </SafeAreaView>
          <View style={styles.tabRow}>
            <TouchableOpacity onPress={() => setUserType({ userType: "0" })} style={[{borderColor:userType == "0" ? '#0069B4' : '#F6F8FB'},styles.BireyselButton]}>
              <FontAwesomeIcon icon={faCircleUser} size={20} color={userType == "0" ? colors.blue : colors.gray} />
              <Text style={[{ color: userType == "0" ? '#0069B4' : '#868A9A'},styles.BireyselText]}>BİREYSEL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setUserType({ userType: "1" })} style={[{borderColor: userType == "1" ? '#0069B4' : '#F6F8FB'},styles.kurumsalButton]}>
              <FontAwesomeIcon icon={faBriefcase} size={20} color={userType == "0" ? colors.gray : colors.blue} />
              <Text style={[{ color: userType == "0" ? '#868A9A' : '#0069B4'},styles.kurumsalText]}>KURUMSAL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <View style={styles.nameSurnameRow}>
              {userType == 0 
              
              ? <FontAwesomeIcon icon={faUser} size={20} color={colors.blue} /> 

              : <FontAwesomeIcon icon={faFile} size={20} color={colors.blue} />}

              <TextInput onChangeText={nameSurname => setNameSurname(nameSurname)} placeholder = {userType == 0 ? 'Adınız Soyadınız' : 'Şirket Ünvanınız'} style={styles.inputNameSurname} />
            </View>
            <View style={styles.emailRow}>
              <FontAwesomeIcon icon={faEnvelope} size={22} color={colors.blue} />
              <TextInput autoCapitalize='none' onChangeText={email => {setEmail(email);setisEmail(emailRegex.test(email))}} placeholder='Email Adresiniz' style={styles.inputEmail} />
            </View>
            <View style={{ flexDirection: 'row', padding: 3, paddingVertical: 0, height: 40, alignItems: 'center', justifyContent: 'space-between', paddingRight: 15, backgroundColor: 'white', borderRadius: 10, marginVertical: 5 }}>
              <FontAwesomeIcon icon={faMobileScreenButton} size={22} color={colors.blue} />
              <Text style={{ color: 'black', marginLeft: 15 }}>+90</Text>
              <TextInput onChangeText={phone => {setPhone(phone);setisPhone(phoneRegex.test(phone))}} placeholder='5xx xxx xx xx' maxLength={10} style={{ width: '65%', marginLeft: 5, fontWeight: '400' }} />
              <View style={{ backgroundColor: '#F6F8FB', padding: 6, }}>
                <Image source={require('../../../assets/images/bayrak.png')} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', padding: 3, paddingVertical: 0, height: 40, alignItems: 'center', borderColor: 'white', backgroundColor: 'white', borderRadius: 10, marginVertical: 5 }}>
              <FontAwesomeIcon icon={faLock} size={22} color={colors.blue} />
              <TextInput autoCapitalize='none' onChangeText={password => setPassword(password)} secureTextEntry={visibleBox1} placeholder='Şifreniz' style={{ width: '73%', marginLeft: 15, fontWeight: '400' }} />
              <TouchableOpacity onPress = {()=>setVisibleBox1(!visibleBox1)} style={{ marginLeft: 15 }} >
                <FontAwesomeIcon icon={faEye} size={21} color={'#E5E5E5'} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', padding: 3, paddingVertical: 0, height: 40, alignItems: 'center', borderColor: 'white', backgroundColor: 'white', borderRadius: 10, marginVertical: 5 }}>
              <FontAwesomeIcon icon={faLock} size={21} color={colors.blue} />
              <TextInput autoCapitalize='none' onChangeText={passwordAgain => setPasswordAgain(passwordAgain)} secureTextEntry={visibleBox2} placeholder='Şifreniz Tekrar' style={{ width: '73%', marginLeft: 15, fontWeight: '400' }} />
              <TouchableOpacity onPress={() => setVisibleBox2} style={{ marginLeft: 15 }} >
                <FontAwesomeIcon icon={faEyeSlash} size={21} color={'#E5E5E5'} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => setisApprove(!isApprove)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                {isApprove ?
                  <View style={{ backgroundColor: colors.white, width: 20, height: 20 }}>
                    <FontAwesomeIcon icon={faSquareCheck} size={21} color={'#0069B4'} />
                  </View>
                  :
                  <View style={{ borderWidth: 3, borderColor: colors.blue, width: 20, height: 20 }}>
                  </View>}
              </TouchableOpacity>
              <Text style={{ marginLeft: 5, color: colors.black, }}><TouchableOpacity><Text style={{ color: colors.blue, textDecorationLine: 'underline', top: 4 }}>Üyelik Sözleşmesi </Text></TouchableOpacity>' ni okudum ve onaylıyorum.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity onPress={() => setisApproveKVKK(!isApproveKVKK)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                {isApproveKVKK ?
                  <View style={{ backgroundColor: colors.white, width: 20, height: 20 }}>
                    <FontAwesomeIcon icon={faSquareCheck} size={21} color={'#0069B4'} />
                  </View>
                  :
                  <View style={{ borderWidth: 3, borderColor: colors.blue, width: 20, height: 20 }}>
                  </View>}
              </TouchableOpacity>
              <Text style={{ marginLeft: 5, color: colors.black, }}><TouchableOpacity><Text style={{ color: colors.blue, textDecorationLine: 'underline', top: 4 }}>KVKK Kanun Metni  </Text></TouchableOpacity>' ni okudum ve onaylıyorum.</Text>
            </View>
            {errorSituation && <View style={{ backgroundColor: 'white', marginVertical: '5%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, width: '100%', alignSelf: 'center', padding: 10 }}>
              <Text style={{ alignSelf: 'center', marginBottom: '5%',textAlign:'center' }}>{errorMessage}</Text>
              <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faTriangleExclamation} size={50} color={'red'} />
            </View>}
            {success && <View style={{ backgroundColor: 'white', marginVertical: '5%', borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, width: '100%', alignSelf: 'center', padding: 10 }}>
              <Text style={{ alignSelf: 'center', marginBottom: '5%',textAlign:'center' }}></Text>
            </View>}
            <TouchableOpacity onPress={() => controlValue()} style={{ width: '100%', marginBottom: 5, backgroundColor: (isApprove == false || isApproveKVKK == false) ? '#0069B4' : colors.orange, padding: 15, marginTop: 15, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}> 
                <Text style={{ color: 'white', fontWeight: '400', fontSize: 18 }}>Kayıt ol</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    )
  }

export default SignUp;