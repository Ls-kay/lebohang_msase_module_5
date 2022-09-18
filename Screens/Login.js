import * as React from 'react';
import { useState } from 'react'
import { Button, StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
            <View style={styles.container}>
                <Text style={styles.input}>Enter email:</Text>
                <TextInput
                value={email}
                onChangeText={(email) => {setEmail(email)}}
                />

                <Text style={styles.input}>Enter Password:</Text>
                <TextInput
                value={password}
                onChangeText={(password) => {setPassword(password)}}
                />
                <Button
                onPress={() => navigation.navigate('RecordScreen')}
                title="Login"
                />
            </View>
    );
}

const styles = StyleSheet.create({

})

export default Login