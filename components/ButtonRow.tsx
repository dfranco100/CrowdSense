import React from 'react';
import { View, Text, Pressable } from 'react-native';

const ButtonRow = () => {
  const handlePress = (label: string) => {
    console.log(`Pressed: ${label}`);
  };

  return (
    <View className=" bg-white flex-row h-20 justify-between px-4 mt-4 rounded-md" >
      {['LIGHT', 'MODERATE', 'EXTREME'].map((label, index) => (
        <Pressable
          key={index}
          onPress={() => handlePress(label)}
          className="flex-1 bg-white  py-6 rounded-md shadow-md items-center"
        >
          <Text className="text-gray-800 border border-primary font-semibold text-lg">{label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ButtonRow;
