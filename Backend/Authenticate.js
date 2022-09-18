import * as firebase from 'firebase';
import { Alert } from 'react-native';

//The email and password were hardcoded here in the lesson video for the authentication process to work and I did not know how to move forward
export async function registration(email, password, name){
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const currentUser = firebase.auth().currentUser
        
        const db = firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({
            name: email,
            password: password
        })
    }catch (error) {

    }
}