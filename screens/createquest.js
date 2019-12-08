import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard,TouchableOpacity } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SegmentedControls } from 'react-native-radio-buttons'


export default function CreateQuest(props) {
  const [form, setForm] = useState(false)
  const [options,setOptions]=useState(["public","private"])
  const [options1,setOptions1]=useState(["explore","play"])
  const [title, setTitle] = useState("")
  const [info, setInfo] = useState("")
  const [ftext, setFtext] = useState("")
  const [mode, setMode] = useState("explore")
  const [status, setStatus] = useState("public")


console.log("testing status ......",mode)
const handleSubmit=()=>{
  console.log("form submit")
}  
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='Create Quest'
        navigation={props.navigation}
      />
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setForm(!form)}>
          {form ? <Text>Cancel</Text> : <Text>Create Quest</Text>}
        </TouchableOpacity>
        <Text style={styles.text}>Title</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Give Tile to your Quest"
          maxLength={100}
          onBlur={Keyboard.dismiss}
          onChangeText={value => setTitle(value)}
        />
        <Text style={styles.text}>Description</Text>
        <TextInput
          style={styles.textInput}
          placeholder="some info about quest"
          maxLength={100}
          onBlur={Keyboard.dismiss}
          onChangeText={value => setInfo(value)}
        />
        <Text style={styles.text}>Finishing Text</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Finishing text"
          maxLength={100}
          onBlur={Keyboard.dismiss}
          onChangeText={value => setFtext(value)}
        />
<SegmentedControls
  tint={'black'}
  selectedTint= {'white'}
  backTint= {'green'}
  options={ options }
  allowFontScaling={ false } // default: true
 onSelection={ ()=>setStatus((prev)=>{
   if(prev==="public"){
     return "private"
   }else{
     return "public"
   }
 }) } 
 selectedOption={ status } 
optionContainerStyle={{flex: 1,paddingTop:10,paddingBottom:10}}
containerStyle={{marginTop:10}}
/>
<SegmentedControls
  tint={'black'}
  selectedTint= {'white'}
  backTint= {'green'}
  options={ options1 }
  allowFontScaling={ false } // default: true
  onSelection={ ()=>setMode((prev)=>{
    if(prev==="explore"){
      return "play"
    }else{
      return "explore"
    }
  }) } 
  selectedOption={ mode } 
  optionContainerStyle={{flex: 1,paddingTop:10,paddingBottom:10}}
  containerStyle={{marginTop:10,marginBottom:10 }}
/>


        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSubmit}
        >
          <Text style={styles.saveButtonText}>next</Text>
        </TouchableOpacity>


        {form ? <Text style={styles.text}> </Text> : null}
      </View>
    </View>
  );
}

CreateQuest.navigationOptions = {
  drawerIcon: () => (
    <View style={styles.icon}>
      <Ionicons
        name="md-navigate"
        size={24}
        style={{ color: 'white' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:18,
    padding:10
  },
  textInput:{
    padding:10,
    fontSize:18
  },
  icon: {
    fontSize: 15,
    color: "white",
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    width: 250,
    borderRadius: 30,
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "green",
    padding: 10,
    margin: 5
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  }
})