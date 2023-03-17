import React from 'react';
import { View,Text } from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from './Preview';

const Carousel = (props) => {


  return (
    <FlatListSlider 
    data={props.image}
    width={props.width}
    timer={2000}
    indicatorContainerStyle={{position:'absolute', bottom: 40}}
    component={props.component}
    indicatorActiveColor={'#21C974'}
    indicatorInActiveColor={'#ffffff'}
    indicatorActiveWidth={30}
    animation
  />
  )
}

export default Carousel