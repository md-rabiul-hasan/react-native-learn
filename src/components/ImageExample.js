import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageExample = () => {
    return (
       <View>
          {/* <Image style={{ resizeMode:'contain' }} source={require('../../assets/test.png')} /> */}
          <Image source={{ uri:'https://thumbs.dreamstime.com/z/banking-app-ui-kit-prototype-ui-design-mobile-finance-application-banking-app-ui-kit-prototype-ui-design-mobile-finance-167578937.jpg' }} style={{ height:'100%', width:'100%' }}  />
       </View>
    );
};

export default ImageExample;