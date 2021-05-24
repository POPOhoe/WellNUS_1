import React, {useState, useEffect} from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '190429536004-jdoc0s07g2upj4d9dp8jlb2rqe5t3cdh.apps.googleusercontent.com',
});

const Login = ({navigation}) => {

    const pressLogin = () => {
        navigation.navigate('Home_Page')
    }

    const pressSignUp = () => {
        navigation.navigate('Signup')
    }

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isSubmit, setIsSubmit] = useState(false)  

    const usernameHandler = (text) => {
        setUsername(text)
    }

    const passwordHandler = (text) => {
        setPassword(text)
    }

    return (
        <View style = {styles.view}>
            <Text style = {styles.text}>Welcome to WellNUS</Text>
            <TextInput 
                placeholder = 'Username'
                style = {styles.textInput}
                autoCapitalize = 'none' 
                onChangeText = {usernameHandler}/>
            <TextInput 
                placeholder = 'Password'
                style = {styles.textInput}
                secureTextEntry = {true}
                autoCapitalize = 'none' 
                onChangeText = {passwordHandler}/>

            <View style = {styles.button}>
                <Button 
                    title = 'Login' 
                    onPress = {pressLogin}
                />
            </View>
            <View style = {styles.button}>
                <Button
                    title="Google Sign-In"
                    onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                />    
            </View>
            <View style = {styles.signUp}>
                <Text>Don't have an account? Click here to sign up</Text>
            </View>            
            <Button 
                title = 'Sign up'
                onPress = {pressSignUp}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '50%'
    },
    text: {
        fontSize: 30,
        paddingVertical: 10
    },
    textInput: {
        fontSize: 25,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '55%'
    },
    touchable: {
        fontSize: 20,
        paddingVertical: 10
    },
    button: {
        marginTop: 20
    },
    signUp: {
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default Login
