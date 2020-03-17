import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
    return (
        <View style={style.header}>
            <Text style={style.title}> Crate List </Text>
        </View>
    )

}

const style = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 10,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold'
    }
})