import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

const alertList = [
    { id: "1", title: "Crowd Alert", message: "High crowd density in your area", time: "10:45 AM" },
    { id: "2", title: "Crowd Alert", message: "Crowd density increasing rapidly", time: "8:30 AM" },
    { id: "3", title: "Crowd Alert", message: "Crowd density increase projected", time: "Yesterday" },
    { id: "4", title: "Crowd Alert", message: "Crowd density increase projected", time: "3 days ago" },
    { id: "5", title: "Crowd Alert", message: "High crowd density in your area", time: "3 days ago " },
    { id: "6", title: "Crowd Alert", message: "Crowd density increase projected", time: "Last week" }
  ];
  
  const Alerts = () => {
    return (
      <View className="flex-1 bg-primary p-4">
        <Image source={images.bg} className='flex-1 absolute w-full z-0'/>
        
        <FlatList

        ListHeaderComponent={
            <>
                <View className='w-full flex-row justify-center mt-20 items-center'>
                    <Image source={images.logo} className='w-full h-16  mb-5 mx-auto rounded-xl'/>
                    <Text className='text-2xl font-bold text-black mb-4 z-10' >Notifications</Text>
                </View>
            </>
        }
          data={alertList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mb-3 p-4 bg-gray-100 rounded-xl border border-gray-300">
              <Text className="text-lg font-semibold text-gray-800">{item.title}</Text>
              <Text className="text-gray-600">{item.message}</Text>
              <Text className="text-sm text-gray-400 mt-1">{item.time}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  

export default Alerts