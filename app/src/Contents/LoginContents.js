import React, {useState} from 'react'
import { Text, View, Image, ScrollView, TextInput, TouchableOpacity,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../styles/colors';
import { faLock, faUser, faTriangleExclamation, faEye, faSquareCheck, faSlash, faSquareRe, faEyeSlash, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Logo from '../Component/Logo';
import {styles} from '../../styles/style';

export default function LoginContens(props) {

    
  const[visibleBox1,setVisibleBox1]= useState(true);
  const[visibleBox2,setVisibleBox2] = useState(true);
  const[isApprove,setisApprove] = useState(false);
  const[phoneMail,setPhoneMail] = useState('');
  const[password,setPassword] = useState('');
  const[popupMessage,setPopupMessage] = useState(false);
  const[remember,setRemember] = useState('');
  const[forgot,setForgot] = useState(true);

  return (
    <ScrollView>
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
                <Image style={styles.tickImage} source={require('../../assets/images/tick.png')} />
              </View>
              :
              <View style={styles.checkboxContainer}>
              </View>}
            <Text style={styles.checkboxText}>Beni Hatırla</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity disabled={phoneMail.length < 1 || password.length < 1} style={[{opacity: phoneMail.length < 1 ? .5 : 1, backgroundColor: isApprove == false ? '#0069B4' : colors.orange}, styles.loginButton]}>        
            <Text style={styles.loginBottunText}>Giriş Yap</Text>
        </TouchableOpacity>

        {popupMessage && <View style={styles.popupContainer}>
          <Text style={styles.popupmessageText}>Telefon/Email ve şifrenizi doğru girdiğinizden emin olunuz</Text>
          <FontAwesomeIcon style={{ alignSelf: 'center' }} icon={faTriangleExclamation} size={50} color={'red'} />
        </View>}

      </View>
      <TouchableOpacity  style={styles.signUpButton}>
        <Text  style={styles.signUpButtonText}>Hesabım yok, Kayıt olmak istiyorum</Text>
      </TouchableOpacity>
    </ScrollView>
  );            
}

