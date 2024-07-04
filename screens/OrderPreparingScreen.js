import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPreparingScreen() {
    const navigation = useNavigation();
    useEffect(()=> {
        setTimeout(()=>{
            navigation.navigate('Delivery');
        }, 3000)
    }, [])
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require('../assets/images/delivery.gif')} className="h-70 w-70" />
    </View>
  )
}

const styles = StyleSheet.create({})