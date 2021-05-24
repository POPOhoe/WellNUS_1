import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SignUp = ({navigation}) => {
    const goBack = () => {
        navigation.navigate('Login')
    }
    return (
        <View style = {styles.view}>
            <Text style = {styles.text}>Sign Up</Text>
            <TextInput 
                placeholder = 'Create Your Username'
                style = {styles.textInput}
                autoCapitalize = 'none' 
            />
            <TextInput 
                placeholder = 'Enter Your Email'
                style = {styles.textInput}
                autoCapitalize = 'none' 
            />
            <TextInput 
                placeholder = 'Create a Password'
                style = {styles.textInput}
                secureTextEntry = {true}
                autoCapitalize = 'none' 
            />
            <View style = {styles.back}>
                <Button
                    title = 'Back'
                    onPress = {goBack}
                />
            </View>
            
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
        fontSize: 20,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '55%'
    },
    back: {
        fontSize: 18,
        paddingVertical: 10,
        paddingBottom: 10
    }
})

export default SignUp
