import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

type Props = {
  onSelect: (density: 'light' | 'crowded' | 'very_crowded') => void;
};

const CrowdButtons = ({ onSelect }: Props) => {
  const handlePress = (label: string) => {
    const densityMap: Record<string, 'light' | 'crowded' | 'very_crowded'> = {
      LIGHT: 'light',
      MODERATE: 'crowded',
      EXTREME: 'very_crowded',
    };

    const densityLevel = densityMap[label];
    onSelect(densityLevel);
  };

  return (
    <View className="bg-white flex flex-row w-full min-w-[122px] min-h-16 overflow-hidden justify-between px-4 mt-4 rounded-md">
      {['LIGHT', 'MODERATE', 'EXTREME'].map((label, index) => (
        <Pressable
          key={index}
          onPress={() => handlePress(label)}
          className="flex-1 bg-white py-8 rounded-md shadow-md items-center"
        >
          <Text className="text-gray-800 border border-primary font-semibold text-lg">
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default CrowdButtons;



