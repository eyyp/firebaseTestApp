import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  Alert,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { styles } from "../../../styles/Home";

import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from "react-native-gesture-handler";
const Home = () =>{

    const [isLoading, setIloading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [downloadURL, setDownloadURL] = useState();
    const [uploadTask, setUploadTask] = useState();
    const [uploadTaskSnapshot,setUploadTaskSnapshot] = useState({});
    const [media,setMedia] = useState(null);
    const[DATA,setDATA] = useState([]);

    useEffect(()=>{
        getUser();
    },[]);

    const getUser = async () => {
      const users = await firestore().collection('users').get();
      console.log(DATA);
    setDATA(users.docs.map((doc)=>{
     return {...doc.data(),id:doc.id}
    })
    )
    }

    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "İşleminize devam edebilmek için kameraya iin vermelisiniz.",
              message:
                "Kişisel bilgileriniz kournacaktır",
              buttonNeutral: "Daha Sonra Sor",
              buttonNegative: "İptal",
              buttonPositive: "Tamam"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("İzni aldık ");
          } else {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                  title: "İşleminize devam edebilmek için kameraya izin vermelisiniz.",
                  message:
                    "Kişisel bilgileriniz kournacaktır",
                  buttonNeutral: "Daha Sonra SoR",
                  buttonNegative: "İptal",
                  buttonPositive: "Tamam"
                }
            );
            console.log("Vermedi izin dallama");
          }
        } catch (err) {
          console.warn(err);
        }
      };



      const uploadImage = () => {
        try{
            Alert.alert("Resim Yükleme Kısmı"); 
        }catch (error) {
            Alert.alert("Hata Meydana Geldi");
        }
      }

      const loadImage = () => {
        try{
            launchCamera({mediaType:'photo',saveToPhotos: true},onMediaSelect);
        }catch (error) {
            console.log(error)
        }
      }
      
      const postImage = async (url) => {
        firestore()
          .collection('users')
          .add({
            id:'3',
            authority: 'mod',
            password:'pas',
            situation:'true',
            userImageUrl:url,
            username:'ep'
          })
          .then(() => {
            console.log('User added!');
          });
      }

      const onSelectImagePress = () => {
        launchImageLibrary({mediaType:'photo',saveToPhotos:true},onMediaSelect);
      }

      const onMediaSelect = async (media) => {
          console.log("file Name::",media.assets[0].fileName);
          if(!media.didCancel) {
            setIsUploading(true);
            const ref = storage().ref(media.assets[0].fileName);
            const task = ref.putFile(media.assets[0].uri);
            setUploadTask(task);
            task.on('state_changed',(taskSnapshot)=>{
              console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
            });

            task.then(async () => {
              const downloadURL = await ref.getDownloadURL();
              setDownloadURL(downloadURL);
              postImage(downloadURL);
              setIsUploading(false);
              setUploadTaskSnapshot({}) 
            });
          }
          else{
            Alert.alert("Olmadı")
          } 
      };

      const renderItem = ({ item }) => {
        
        return (
          <View style={styles.cart}>
            <Image style={styles.image} source={{uri:item.userImageUrl}}/>
            <View style={styles.writeRow}>
              <Text style={styles.tittle}> {item.username}</Text>
            </View>
          </View>
        );
      };

      return(    
        <View style={styles.Body}>
          <View style={styles.ButtonRow}>
            <TouchableOpacity style={styles.button} onPress={requestCameraPermission}><Text style = {styles.buttonText}>İzin al</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={uploadImage}><Text style = {styles.buttonText} >Resim Yükle</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={loadImage}><Text style = {styles.buttonText} >Camerayı Aç</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onSelectImagePress}><Text style = {styles.buttonText} >Galeriyi Aç</Text></TouchableOpacity>
          </View>
              {isUploading && (
                <View>
                  <ActivityIndicator size="large" color="#00ff00"></ActivityIndicator>
                  <Text>Yükleniyor</Text>
                </View>
              )}
            <ScrollView>
              <View>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  />
              </View>
              <Text> Product </Text>
              <View>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                  contentContainerStyle={{
                      alignSelf: 'flex-start',
                   }}
                    numColumns={ 2}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                  />
              </View>
            </ScrollView>
        </View>
        );

}

export default Home;