import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = () => {
  return (
    <View className="h-72 w-full rounded-2xl overflow-hidden border border-gray-300">
      <MapView
        style={{ flex: 1, height: 300, width: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Current Location"
          description="You are here"
        />
      </MapView>
    </View>
  );
};


export default MapComponent;
