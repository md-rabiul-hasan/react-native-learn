import React,{useState} from 'react';
import {View,  TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';

const Input = () => {

    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (email) => {
        setEmail(email)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleLogin = (email, password) => {
       const test = email + ' = ' + password;
       alert(test);
    }


    return (
        <View style={styles.container}>
            <TextInput onChangeText={handleEmail} style={styles.input} placeholder="Email"/>
            <TextInput onChangeText={handlePassword} style={styles.input} placeholder="Password"/>
            <TouchableOpacity>
                <Button onPress={ () => {
                    handleLogin(email, password);
                } } title="Submit" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 25,
        marginTop: 10
    },
    input:{
        borderWidth:1,
        padding: 5,
        borderColor: 'blue',
        marginBottom: 10,
        borderRadius:4
    }
});

export default Input;