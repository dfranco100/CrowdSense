import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { images } from '@/constants/images';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <View className="flex-1 bg-white justify-center  ">
      <Image source={images.bg} className="absolute w-full h-full z-0" resizeMode="cover" />

      <View className="items-center mb-8 z-10">
        <Image source={images.logo} className="h-20 w-20 mb-4 rounded-full" />
        <Text className="text-2xl font-bold text-gray-800">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </Text>
        <Text className="text-sm text-gray-500">
          {isSignUp ? 'Sign up to get started' : 'Sign in to continue'}
        </Text>
      </View>

      <View className="z-10">
        <TextInput
          placeholder="Email"
          className="bg-white border border-gray-300 p-3 rounded-lg mb-4 text-gray-800"
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="bg-white border border-gray-300 p-3 rounded-lg mb-6 text-gray-800"
          placeholderTextColor="#A0A0A0"
        />

        <Pressable className="bg-primary py-3 rounded-lg items-center mb-3">
          <Text className="text-white font-semibold">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </Text>
        </Pressable>

        <Pressable onPress={() => setIsSignUp(!isSignUp)} className="items-center mt-2">
          <Text className="text-gray-500">
            {isSignUp ? 'Already have an account? ' : 'New here? '}
            <Text className="text-primary font-semibold">
              {isSignUp ? 'Sign In' : 'Create Account'}
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthScreen;