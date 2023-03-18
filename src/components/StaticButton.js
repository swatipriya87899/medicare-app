import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const StaticButton = props => {

  
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text style={[styles.button_text, props.button_style]}>
        {props.icon && <props.icon name={props.icon_name} size={props.icon_size} color={props.icon_color}/>}
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-around',
    flexDirection: 'row',
    marginVertical:5
  },
  button_text: {
    backgroundColor: '#DDFFBC',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#064635',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StaticButton;
