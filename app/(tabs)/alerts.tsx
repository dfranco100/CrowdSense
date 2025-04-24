import { View, Text, Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import { images } from '@/constants/images'
import { SwipeListView } from 'react-native-swipe-list-view'



const alertList = [
    { id: "1", title: "Crowd Alert", message: "High crowd density in your area", time: "10:45 AM" },
    { id: "2", title: "Crowd Alert", message: "Crowd density increasing rapidly", time: "8:30 AM" },
    { id: "3", title: "Crowd Alert", message: "Crowd density increase projected", time: "Yesterday" },
    { id: "4", title: "Crowd Alert", message: "Crowd density increase projected", time: "3 days ago" },
    { id: "5", title: "Crowd Alert", message: "High crowd density in your area", time: "3 days ago " },
    { id: "6", title: "Crowd Alert", message: "Crowd density increase projected", time: "Last week" }
  ];
  


  const Alerts = () => {
    
    const [notifications, setNotifications] = useState(alertList);

    const handleDelete = (rowKey: string) => {
        const newData = notifications.filter(item => item.id !== rowKey);
        setNotifications(newData);
      };

      return (
        <View className="flex-1 bg-primary p-4">
          <Image source={images.bg} className="absolute w-full h-full z-0" />
    
          <SwipeListView
            data={notifications}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
              <>
                <View className="w-full flex-row justify-center mt-20 items-center">
                  <Image source={images.logo} className="w-full h-16 mb-2 mx-auto rounded-xl" />
                </View>
                <Text className="text-2xl font-bold text-black mb-4 text-center z-10">Notifications</Text>
              </>
            }
            renderItem={({ item }) => (
              <View className="mb-3 p-4 bg-gray-100 rounded-xl border border-gray-300">
                <Text className="text-lg font-semibold text-gray-800">{item.title}</Text>
                <Text className="text-gray-600">{item.message}</Text>
                <Text className="text-sm text-gray-400 mt-1">{item.time}</Text>
              </View>
            )}
            renderHiddenItem={({ item }) => (
              <View className="flex-1 justify-center items-end pr-5 bg-red-600 rounded-xl my-1">
                <Text
                  className="text-white font-bold"
                  onPress={() => handleDelete(item.id)}
                >
                  Delete
                </Text>
              </View>
            )}
            rightOpenValue={-75}
            disableRightSwipe
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
  };
  

export default Alerts