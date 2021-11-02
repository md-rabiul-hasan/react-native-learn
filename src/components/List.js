import React, {useState} from 'react';
import { View,Text, TouchableOpacity,StyleSheet } from 'react-native';

const List = () => {

    const items = [
        {
            id:1,
            name:'Rabiul Hasan'
        },
        {
            id: 2,
            name: 'Arfiul Islam'
        },
        {
            id: 3,
            name: 'Kawsar Ahmed'
        },
        {
            id: 4,
            name: 'Sakib al hasan'
        }
    ]

    const alertPlayerName = (name) => {
        alert(name);
    }

    const [players, setPlayers] = useState(items);

    return (
       <View>
           {
               players.map( (item,index) => (
                   <TouchableOpacity
                    key={item.id}
                    style={styles.container}
                    onPress={ 
                        () => alertPlayerName(item.name)
                    }
                   >
                       <Text style={styles.text}>{item.name}</Text>
                   </TouchableOpacity>
               ))
           }
       </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        marginBottom: 10,
        padding: 10,
        alignItems: 'center'
    },
    text:{
        color: 'red'
    }
});

export default List;