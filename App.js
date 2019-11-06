import React, {useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import DrawerNavigator from './components/DrawerNavigator'


export default function App() {
  // const [count, setCount] = useState(0)
  // const [items, addItem] = useState([])
  // const [item, setItem] = useState('')
  return (
    <View >
      <DrawerNavigator />
      {/* <Text>welcome</Text>
      <Button title="Testing" onPress={()=> setCount(count+1)}/>
      <Text>{count}</Text>
      <TextInput
          style={{height: 40}}
          placeholder="Add Items"
          onChangeText={(text) => setItem(text)}
          value={item}

        />
        <Text>{item}</Text>
        <Button title="Add Item" onPress={()=>addItem(oldArray=> [...oldArray,item])

         }  />
        <Text>{items.length >0 ? items.map(item =><Text>{item}{'\n'}</Text>): ''}</Text> */}

    </View>
  );
}




