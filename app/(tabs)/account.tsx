import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import { View, Text, TextInput, Pressable, Image, Button, Alert } from 'react-native';
import { images } from '@/constants/images';
import { auth } from '@/firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';





const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password');
      return;
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert('Account Created', 'You can now sign in.');
        
        setIsSignUp(false);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Success', 'You are now signed in!');
        
        
      }
    } catch (error: any) {
      Alert.alert('Auth Error', error.message);
    }
  };

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
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="bg-white border border-gray-300 p-3 rounded-lg mb-6 text-gray-800"
          placeholderTextColor="#A0A0A0"
          value={password}
          onChangeText={setPassword}
        />
        <Link href="/" asChild>
          <Pressable className="bg-primary py-3 rounded-lg items-center mb-3"
            onPress={handleSubmit}
          >
          <Text className="text-white font-semibold">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </Text>
          </Pressable>
        </Link>

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