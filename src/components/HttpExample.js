import React, {useState,useEffect} from 'react';
import {View, Text} from 'react-native';

const HttpExample = () => {
   
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
        .then( (response) => response.json() )
        .then( (responseJson) => {
           setData(responseJson.title);
        } )
        .catch( (error) => {
            console.log(error);
        } )
    }, [])

    return (
       <View>
           <Text>{data}</Text>
       </View>
    );
};

export default HttpExample;