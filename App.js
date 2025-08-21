import { Text, View, Button, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState } from "react";

function App() {
  const [itemInput, itemInputSetter] = useState("");
  const [itemList, itemListSetter] = useState([]);

  function addNewItem(text) {
    if (text.trim() === "") return; // prevent empty items
    itemListSetter([...itemList, text]);
  }

  function removeItem(targetIdx) {
    itemListSetter(itemList.filter((item, idx) => idx != targetIdx));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📝 Simple To-Do List</Text>
      <TodoItemInput
        newItemFunction={addNewItem}
        itemInputSetter={itemInputSetter}
        itemInput={itemInput}
      />
      <TodoItemList itemList={itemList} removeItemFunction={removeItem}/>
    </View>
  );
}

function TodoItemInput(props) {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        value={props.itemInput}
        onChangeText={(e) => props.itemInputSetter(e)}
      />
      <Button
        onPress={() => {
          props.newItemFunction(props.itemInput);
          props.itemInputSetter("");
        }}
        title="Add"
      />
    </View>
  );
}

function TodoItemList(props) {
  return (
    <View style={styles.listWrapper}>
      <ScrollView>
        {props.itemList.map((item, idx) => (
          <View key={idx} style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
            <Button title="Remove" onPress={() => props.removeItemFunction(idx)}></Button>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputWrapper: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#aaa",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 8,
    backgroundColor: "white",
  },
  listWrapper: {
    marginTop: 10,
  },
  listItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // shadow for Android
  },
  listItemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default App;
