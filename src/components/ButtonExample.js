import React from 'react';
import { Button,StyleSheet,TouchableOpacity,View, Text } from 'react-native';

const ButtonExample = () => {
   
    return (
        <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text}>
               Button
            </Text>
         </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
     },
     text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
     }
});

export default ButtonExample;