import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function List({ item,onPressHandler }){
    return(
        <TouchableOpacity onPress={() => onPressHandler(item.key)}>
            <View style={style.item}>
                <MaterialIcons name='delete' size={17} color='#333' />
                 <Text style={style.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
    },
    itemText:{
        marginLeft:10,
    }
})