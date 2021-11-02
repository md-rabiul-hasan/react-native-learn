import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PresentationalComponent = (props) => {
    const {paragraph, updateParagraph} = props;
    return (
        <View>
            <Text style={styles.para} onPress={()=> updateParagraph("Bangladesh")} >{paragraph}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    para:{
        color     : 'red',
        marginTop : 30,
        textAlign : 'center',
        fontSize  : 18,
        fontWeight: 'bold'
    }
});

export default PresentationalComponent;