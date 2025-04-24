import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import MapComponent from "@/components/Map";
import * as Location from 'expo-location';
import { useEffect } from 'react';
import ButtonRow from "@/components/ButtonRow";




export default function Index() {

  return (
    <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0"/>

        <ScrollView className=" px-5 " showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 5, paddingBottom:10}}>
          <Image source={images.logo} className=" w-full h-36 mt-20 mb-5 mx-auto rounded-xl "/>
          <MapComponent />
          <Text className="text-3xl font-semibold text-black  text-center mt-7 bg-white rounded-xl">
             Select Crowd Level 
          </Text>
          <ButtonRow/>
        </ScrollView>
    </View>
  );
}
