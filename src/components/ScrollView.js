import React, {useState} from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';

const ScrollViewScreen = () => {
    const list = [
        {
            id: 1,
            name: 'Rabiul Hasan',
        },
        {
            id: 2,
            name: 'Rabiul ',
        },
        {
            id: 3,
            name: ' Hasan',
        },
        {
            id: 4,
            name: 'dfg Hasan',
        },
        {
            id: 5,
            name: 'Rabisdfgsdul Hasan',
        },
        {
            id: 6,
            name: 'Rabidsgfsdul Hasan',
        },
        {
            id: 7,
            name: '43 Hasan',
        },
        {
            id: 8,
            name: 'Rabiudfgdsl Hasan',
        },
        {
            id: 9,
            name: 'dfg Hertasan',
        },
        {
            id: 10,
            name: 'Rabisdfwertgsdul Hasan',
        },
        {
            id: 11,
            name: 'Rabidsgwertwerfsdul Hasan',
        },
        {
            id: 12,
            name: '43 Hawertwesan',
        },
        {
            id: 13,
            name: 'Rabiwertudfgdsl Hadfgsan',
        }
    ]

    const [users, setUsers] = useState(list);
    return (
        <ScrollView>
            <View>
                {
                    users.map( (item,index) => (
                        <View key={item.id} style={styles.item}>
                            <Text>{item.name}</Text>
                        </View>
                    ) )
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    item:{
        backgroundColor: 'yellow',
        marginBottom: 5,
        paddingVertical: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default ScrollViewScreen;