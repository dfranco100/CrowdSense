import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Region, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';
import areas from '@/areas.json';

const fallbackRegion: Region = {
    latitude: 37.7749,        // San Francisco as default
    longitude: -122.4194,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const densityColors = {
    light: 'rgba(0,255,0,0.3)',
    crowded: 'rgba(255,255,0,0.4)',
    very_crowded: 'rgba(255,0,0,0.4)',
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
              latitude: 37.7749,
              longitude: -122.4194,
            }}
            title={locationDenied ? "Default Location" : "Your Location"}
          />
          {areas.map((area) => (
          <Polygon
            key={area.id}
            coordinates={area.coordinates}
            fillColor={densityColors[area.density as 'light' | 'crowded' | 'very_crowded' || 'light']}
            strokeColor="rgba(0,0,0,0.3)"
            strokeWidth={1}
          />
        ))}
        </MapView>
      </View>
    );
  };

export default MapComponent;
