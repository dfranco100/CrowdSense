import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';

const fallbackRegion: Region = {
    latitude: 37.7749,        // San Francisco as default
    longitude: -122.4194,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const MapComponent = () => {
    const [region, setRegion] = useState<Region | null>(null);
    const [locationDenied, setLocationDenied] = useState(false);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          setLocationDenied(true);
          setRegion(fallbackRegion);
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      })();
    }, []);
  
    if (!region) {
      return (
        <View className="h-72 w-full justify-center items-center">
         <Text className="text-gray-500">Loading map...</Text>
        </View>
      );
    }
  
    return (
      <View className="h-72 w-full rounded-2xl overflow-hidden border border-gray-300">
        <MapView
          style={{ flex: 1, height: 400, width: '100%' }}
          region={region}
          showsUserLocation={!locationDenied}
          onRegionChangeComplete={setRegion}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title={locationDenied ? "Default Location" : "Your Location"}
          />
        </MapView>
      </View>
    );
  };

export default MapComponent;
