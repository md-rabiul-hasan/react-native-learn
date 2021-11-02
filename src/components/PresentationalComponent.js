import React from 'react';
import {View, Text} from 'react-native';

const PresentationalComponent = (props) => {
    const {paragraph, updateParagraph} = props;
    return (
        <View>
            <Text onPress={()=> updateParagraph("Bangladesh")} >{paragraph}</Text>
        </View>
    );
};

export default PresentationalComponent;