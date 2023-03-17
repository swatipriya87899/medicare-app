import React from 'react';
import { Text,View, StyleSheet } from 'react-native';

const Heading = (props) => {
  return (
    <View style={styles.heading_container}>
        <Text style={styles.heading_text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    heading_container:{
      marginVertical: 20,
        alignItems:'center'
    },
    heading_text:{
        color: '#064635',
        fontSize:24,
        fontWeight:'700'
    }
})

export default Heading