import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PresentationalComponent from './src/components/PresentationalComponent';
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
    <View>
      <Style />
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