import * as React from 'react';
import { Button, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from '../FirebaseConfig';
import { useState } from 'react';
import { registration } from '../Backend/Authenticate';
const Register = ({ navigation }) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('' )

  const registerUser=()=>{
    registration(email, password, name)
  }  
    if(!firebase.apps.length){
        console.log("Firebase is connected");
        firebase.initializeApp(firebaseConfig)
    }
    return (
            <View style={styles.container}>

                <Text style={styles.input}>Enter first name:</Text>
                <TextInput
                value={name}
                onChangeText={(name) => {setName(name)}}
                />

                <Text style={styles.input}>Enter last name:</Text>
                <TextInput
                value={surname}
                onChangeText={(surname) => {setSurname(surname)}}
                />

                <Text style={styles.input}>Enter email:</Text>
                <TextInput
                value={email}
                onChangeText={(email) => {setEmail(email)}}
                />

                <Text style={styles.input}>Create Password:</Text>
                <TextInput
                value={password}
                onChangeText={(password) => {setPassword(password)}}
                />

                <Button
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                title="Register"
                />
                
                <Text>Have an account Login here:</Text>

                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                title="Register"
                >
                    <Text style={styles.block}>Login</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10
    },
    button: {
        marginTop: 50
    },
    block: {
        marginTop: 10,
        fontSize: 20,
    }
})

export default Register