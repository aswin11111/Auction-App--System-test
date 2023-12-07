import React, {useState} from 'react';


import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';

import Home from '../screens/home';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{title:'',headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{title:'',headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );};