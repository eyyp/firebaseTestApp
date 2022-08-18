import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Logo() {
  return (
  <View>
    <Image source={require('../../assets/images/logo.png')} style={[styles.base,styles.image]} />
    <Image source={require('../../assets/yuk-getir-text.png')} style={[styles.base,styles.text]} />
  </View>);
}

const styles = StyleSheet.create({
  base:{
    resizeMode: 'stretch',
    marginLeft:95
  },
  image: {
    marginTop: '10%',
    width: 150,
    height: 145,
    marginBottom:0
  },
  text:{
    marginTop: '5%',
    width: 150,
    height: 45,
    marginBottom:0
  }
})