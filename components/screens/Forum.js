import React from 'react'
import { View } from 'react-native';
import Header from './../Header';
import Tab from './../Tab';

const Forum = ({navigation}) => {
    const goBack = () => {
        navigation.navigate('Home_Page')
      }
      
      return (
        <View>
          <Header title = 'Forum' goBack = {goBack} />
        </View>
        
      )
}

export default Forum
