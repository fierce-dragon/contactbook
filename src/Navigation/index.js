import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ContactList from '../screens/ContactList';
import ViewContact from '../screens/ViewContact';

const Stack = createStackNavigator();

const Navigation = () => {
    return (<Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList"
            component={ContactList}
            options={
                {
                    headerShown: false,
                    gestureEnabled: false
                }
            }/>
        <Stack.Screen name="ViewContact"
            component={ViewContact}
            options={
                {
                    headerShown: false,
                    gestureEnabled: false
                }
            }/>

    </Stack.Navigator>)
}

export default Navigation

const styles = StyleSheet.create({})
