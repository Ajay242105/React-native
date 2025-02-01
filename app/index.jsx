import { Link } from 'expo-router'
import React from 'react'
import { View,Button,Text } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 justify-center items-center ">
        <Text className='text-3xl font-bold'>Hello world!</Text>
        <Button title="Press Me" className="mt-8" />
      <Link href="/home" style={{color:'blue'}}>go to home</Link>
    </View>
  )
}