import { Text, View, Image, ScrollView, TextInput, TouchableOpacity,FlatList,Alert,Button,PermissionsAndroid} from 'react-native'
import React, { Component,useEffect,useState,useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../styles/colors';
import { faLock, faUser, faTriangleExclamation, faEye, faSquareCheck, faSlash, faSquareRe, faEyeSlash, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Logo from '../../Component/Logo';
import {styles} from '../../../styles/style';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Login = (props) => {

  const[visibleBox1,setVisibleBox1]= useState(true);
  const[visibleBox2,setVisibleBox2] = useState(true);
  const[isApprove,setisApprove] = useState(false);
  const[phoneMail,setPhoneMail] = useState('');
  const[password,setPassword] = useState('');
  const[popupMessage,setPopupMessage] = useState(false);
  const[remember,setRemember] = useState('');
  const[forgot,setForgot] = useState(true);
  const[user,setUser] = useState([]);

  /*const login = async () => {
    try {
      let response = await auth().signInWithEmailAndPassword(phoneMail, password)
      if (response) {
        console.log(response)
        props.navigation.navigate('Home');
      }
    } catch (e) {
      console.error(e.message)
    }
  }*/

  const fetchUsers = async () => {
    const users = await firestore().collection('users').get();
    setUser(users.docs.map((doc)=>{
     return {...doc.data(),id:doc.id}
    })
    )
  }

  useEffect(()=>{
        fetchUsers();
        console.log(user);
      },[]) 

    return (
      <View style={styles.Body}>
        <SafeAreaView style={styles.Area}>
          <TouchableOpacity style={styles.backButton}  onPress={()=>props.navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronCircleLeft} size={20} color={colors.blue} />
            <Text style={styles.backText}>Geri Dön</Text>
          </TouchableOpacity>
          <Logo/>
          <Text style={styles.titleText}>Kullanıcı Girişi</Text>
        </SafeAreaView>
        <View style={styles.inputBody}>
          <View style={styles.userRow}>
            <FontAwesomeIcon icon={faUser} size={22} color={colors.blue} style={styles.ml10} />
            <TextInput autoCorrect={false} autoCapitalize='none' onChangeText={phoneMail => setPhoneMail(phoneMail)} placeholder='Telefon Numarası veya Mail Adresi' style={styles.userText} />
            <TouchableOpacity onPress={() => setVisibleBox1({ visibleBox1: !visibleBox1})}>
            </TouchableOpacity>
          </View>
          <View style={styles.passwordRow}>
            <FontAwesomeIcon icon={faLock} size={22} color={colors.blue} style={styles.ml10} />
            <TextInput autoCapitalize='none' onChangeText={password => setPassword(password)} secureTextEntry={visibleBox1} placeholder='Parola giriniz' style={styles.passwordText} />
            <TouchableOpacity onPress={() => setVisibleBox2({ visibleBox2: !visibleBox2})}>
              <FontAwesomeIcon icon={visibleBox2 ? faEye : faEyeSlash} size={21} color={'#E5E5E5'} style={styles.ml14} />
            </TouchableOpacity>
            
          </View>

          <View style={styles.checkboxBody}>
            <TouchableOpacity onPress={() => setRemember({ remember: !remember })} style={styles.checkboxButton}>
              {remember ?
                <View style={styles.checkboxIconRow}>
                  <Image style={styles.tickImage} source={require('../../../assets/images/tick.png')} />
                </View>
                :
                <View style={styles.checkboxContainer}>
                </View>}
              <Text style={styles.checkboxText}>Beni Hatırla</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={()=>login()} disabled={phoneMail.length < 1 || password.length < 1} style={[{opacity: phoneMail.length < 1 ? .5 : 1, backgroundColor: isApprove == false ? '#0069B4' : colors.orange}, styles.loginButton]} >        
              <Text style={styles.loginBottunText}>Giriş Yap</Text>
          </TouchableOpacity>

          {popupMessage && <View style={styles.popupContainer}>
            <Text style={styles.popupmessageText}>Telefon/Email ve şifrenizi doğru girdiğinizden emin olunuz</Text>
            <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faTriangleExclamation} size={50} color={'red'} />
          </View>}

        </View>
        <TouchableOpacity  style={styles.signUpButton} onPress={()=>props.navigation.navigate('SignUp')}>
          <Text  style={styles.signUpButtonText}>Hesabım yok, Kayıt olmak istiyorum</Text>
        </TouchableOpacity>
        <FlatList
          data={user}
          renderItem={({ item }) => <Text style={{ fontSize: 14, color: '#0F205B' }}>{item.username}</Text>}
          keyExtractor={item => item.id}
          >
        </FlatList>
      </View>  
    );
  }
  
export default Login;

