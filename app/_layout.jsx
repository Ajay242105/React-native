import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router'

const RooyLayut = () => {
  return (
    <>

     
        {/* <Slot/> */}
        <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
            
        </Stack>

    </>
  )
}

export default RooyLayut

