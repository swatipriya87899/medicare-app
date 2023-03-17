import React from 'react';
import { Text,View, StyleSheet } from 'react-native';

const SubHeading = (props) => {
  return (
    <Text style={styles.sub_heading}>{props.title}</Text>
  )
}

const styles = StyleSheet.create({
    sub_heading:{
        color: '#000000',
        fontSize:16,
        fontWeight:'700',
        marginLeft:5
    }
})

export default SubHeading