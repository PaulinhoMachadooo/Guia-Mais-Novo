import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
            name="home"
            options={{
                headerShown: false,
                title: "Home"
            }}
        />
        <Tabs.Screen
             name="categories"
             options={{
                 headerShown: false,
                 title: "Categorias"
            }}
        />
        <Tabs.Screen
            name="about"
            options={{
                headerShown: false,
                title: "Sobre"
            }}
        />
        
    </Tabs>
  )
}
/*

            
            */


export default _layout