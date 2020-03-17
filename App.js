import React, { useState } from 'react';
import Header from './components/header';
import List from './components/list';
import CreateList from './components/createList';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function App() {

  const [shop, setShop] = useState([
    { text: 'Hello React Native', key: 1 },
    { text: 'You can do it', key: 2 },
    { text: 'Let s do it', key: 3 }
  ])

  const submitbutton = (text) => {

    if (text.length > 3) {
      setShop((prevTodo) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodo
        ]
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert Closed') }
      ])

    }

  }

  const onPressHandler = (key) => {
    setShop((removeitem) => {
      return removeitem.filter(shop => shop.key != key);
    })
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <CreateList submitbutton={submitbutton} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={shop}
            renderItem={({ item }) => (
              <List item={item} onPressHandler={onPressHandler} />
            )}
          />
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  content: {
    padding: 20,
    paddingHorizontal: 10,
  }


});
