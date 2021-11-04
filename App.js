import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HttpExample from './src/components/HttpExample';
import ImageExample from './src/components/ImageExample';
import Input from './src/components/Input';
import List from './src/components/List';
import PresentationalComponent from './src/components/PresentationalComponent';
import ScrollViewScreen from './src/components/ScrollView';
import Style from './src/components/Style';

const App = () => {
  const paragraph = {
    content: 'Hello Bangladesh'
  }
  const [para, setPara] = useState(paragraph);

  const updateParagraph = (country) => {
    const newtext = {
      content: 'Hello '+country
    }
    setPara(newtext);
  }
  return (
      <View style={{ marginTop: 20 }}>
        <HttpExample />
      </View>
      
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'

  }
});

export default App;