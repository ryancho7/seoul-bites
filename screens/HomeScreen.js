import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { getFeaturedRestaurants } from '../api';

export default function HomeScreen() {

    const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

    useEffect(() => {
        getFeaturedRestaurants().then(data=>{
            setFeaturedRestaurants(data);
        })
    },[])

  return (
    <SafeAreaView className="bg-white">
        <StatusBar barStyle="dark-content" />
        <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center pl-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
                <View className="flex-row items center space-x-1 border-0 border-l-2 pl-2 pr-3 pt-2 pb-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">Seattle, WA</Text>
                </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}}className="p-3 bg-gray-300 rounded-full">
                <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom:20
            }}
        >
            <Categories />
            <View className="p-3 mt-4">
            <Text className="font-bold text-xl">Welcome to, <Text className="text-blue-400">Seoul Bites</Text></Text>
                <Text className="italic text-m">Bringing the authentic taste of Seoul to your doorstep</Text>
            </View>
            <View className="mt-1">
                {
                    featuredRestaurants.map((item,index)=> {
                        return (
                            <FeaturedRow 
                                key={index}
                                title={item.name}
                                restaurants={item.restaurants}
                                description={item.description}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}