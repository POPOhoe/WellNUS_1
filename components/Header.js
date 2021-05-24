import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logout from './screens/Logout';

const Header = ({title, logout, goBack}) => {
    return (
      <View style = {styles.header}>
        {goBack && <Icon
          name = 'chevron-left'
          size = {25}
          onPress = {goBack}
          style = {styles.icon}
        />}    
        <Text style = {styles.text}>{title}</Text>
        {logout && <Logout/>}
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      height: 60,
      padding: 15,
      backgroundColor: 'darkslateblue',
      alignItems: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'right' 
    },
    icon: {
      position: 'absolute',
      left: 15
    }
  })

export default Header   