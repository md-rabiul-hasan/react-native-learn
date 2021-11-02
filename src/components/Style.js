import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const Style = () => {
   return (
   <View style={styles.container}>
       <View style={styles.red}></View>
       <View style={styles.green}></View>
       <View style={styles.blue}></View>
   </View>
   )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    red:{
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    green:{
        height: 100,
        width: 100,
        backgroundColor: 'green'
    },
    blue:{
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    }
});

export default Style;