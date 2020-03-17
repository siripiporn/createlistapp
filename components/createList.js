import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


export default function CreateList({submitbutton}) {
    const [text, setText] = useState();

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={style.input}
                placeholder='Create List ...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitbutton(text)} title='Create List' color='coral' />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})