import {Button, Text, TextInput, View} from "react-native";
import {StyleSheet} from 'react-native';
import {useRef, useState} from "react";
export default function Index() {
    const [name, setName] = useState()
    const [password, setPass] = useState()
    const [change, setChange] = useState(false)
    function handleSubmit() {
        setChange(true)
        setName(undefined)
        setPass(undefined)
    }
  return (
    <View>
        <TextInput value={name} onChangeText={(input)=> setName(input)} placeholder={'Username'} style={styles.textInput} />
        <TextInput value={password} onChangeText={(input)=> setPass(input)} placeholder={'Password'} style={styles.textInput}  />
        <Button onPress={handleSubmit} title={'Submit'}/>

        {change &&
            <View style={styles.result}>
            <Text style={{color:'red'}}>{name}</Text>
            <Text style={{color:'red'}}>{password}</Text>
        </View>}

    </View>
  );
}


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 250,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:'white',
        marginTop:10,
        marginBottom:20,
    },
    result: {
        display: 'flex',
        width: '100%',
        height:300,
        color:'red'
    }
})