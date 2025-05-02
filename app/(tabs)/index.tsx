import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";
import MapComponent from "@/components/Map";
import * as Location from 'expo-location';
import { useEffect } from 'react';
import ButtonRow from "@/components/ButtonRow";
import CrowdButtons from "@/components/CrowdButtons";
import { db, auth, serverTimestamp, arrayUnion, setDoc, doc } from '@/firebaseConfig';
import { Timestamp } from 'firebase/firestore';





export default function Index() {
  const submitCrowdReport = async (densityLevel: 'light' | 'crowded' | 'very_crowded') => {
    const userId = auth.currentUser?.uid;
    const areaId = 'memorial'; // Change this to your actual area ID
    const areaDocRef = doc(db, 'crowdReports', areaId);
  
    const polygonCoordinates = [  // Use actual coordinates for your area
      { latitude: 40.785091, longitude: -73.968285 },
      { latitude: 40.786, longitude: -73.967 },
      { latitude: 40.784, longitude: -73.966 },
    ];
  
    try {
      await setDoc(areaDocRef, {
        density: densityLevel,
        lastUpdated: serverTimestamp(),
        coordinates: polygonCoordinates,
        reports: arrayUnion({
          userId,
          density: densityLevel,
          timestamp: Timestamp.now(),
        }),
      }, { merge: true });
  
      console.log('Report submitted successfully!');
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };
  return (
    <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0"/>

        <ScrollView className=" px-5 " showsVerticalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 5, paddingBottom:10}}>
          <Image source={images.logo} className=" w-full h-36 mt-20 mb-5 mx-auto rounded-xl "/>
          <MapComponent />
          <Text className="text-3xl font-semibold text-black  text-center mt-7 bg-white rounded-xl">
             Select Crowd Level 
          </Text>
          <CrowdButtons onSelect={submitCrowdReport}/>
        </ScrollView>
    </View>
  );
}
