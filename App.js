import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';

function App() {
  const [itemInput, itemInputSetter] = useState("");
  const [itemList, itemListSetter] = useState([]);

  function addNewItem(text) {
    itemListSetter([...itemList, text]);
  }

  return (
    <View>
      <Text className="Heading">Simple To-Do List</Text>
      <TodoItemInput newItemFunction={addNewItem} itemInputSetter={itemInputSetter}/>
      <TodoItemList itemList={itemList}/>
    </View>
  )
}

function TodoItemInput(props) {
  return (
    <View>
      <TextInput onChangeText={(e) => {itemInputSetter(e)}} className="item-input"></TextInput>
      <Button onPress={() => {props.newItemFunction(itemInput)}} className="item-input-submit"></Button>
    </View>
  )
}

function TodoItemList(props) {
  <View className="item-list-wrapper-">
    {props.itemList.map((item, idx) => (
      return <View key={idx} className="list-item"><Text className="list-item-text">{item}</Text></View>
    ))}
  </View>
}

export default App;