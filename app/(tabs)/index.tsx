import { images } from "@/constants/images";
import { Image, ScrollView, Text, View, Alert } from "react-native";
import MapComponent from "@/components/Map";
import * as Location from 'expo-location';
import { useEffect } from 'react';
import CrowdButtons from "@/components/CrowdButtons";
import { db, auth, serverTimestamp, arrayUnion, setDoc, doc } from '@/firebaseConfig';
import { Timestamp } from 'firebase/firestore';





export default function Index() {
  const submitCrowdReport = async (densityLevel: 'light' | 'crowded' | 'very_crowded') => {
    const userId = auth.currentUser?.uid;
    const areaId = 'market_street'; // Change this to your actual area ID
    const areaDocRef = doc(db, 'crowdReports', areaId);
  
    if (!userId) {
      Alert.alert('Authentication Error', 'You must be logged in to submit a report.');
      return;
    }
    const polygonCoordinates = [  // Use actual coordinates for your area
      { "latitude": 37.77390554913351, "longitude": -122.41419100747052 },
      { "latitude": 37.77393819758965, "longitude": -122.42420034636696 },
      { "latitude": 37.78511400512986, "longitude": -122.42120347731895 }
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
