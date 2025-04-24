import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import MapComponent from "@/components/Map";
import * as Location from 'expo-location';
import { useEffect } from 'react';




export default function Index() {

  return (
    <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0"/>

        <ScrollView className=" px-5 " showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:10, paddingBottom:10}}>
          <Image source={images.logo} className=" w-full h-36 mt-20 mb-5 mx-auto rounded-xl "/>
          <MapComponent />
        </ScrollView>
    </View>
  );
}
