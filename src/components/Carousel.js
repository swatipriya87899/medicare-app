import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View,Text } from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from './Preview';

const Carousel = (props) => {

  const [image,setImage]=useState(props.image)

  useEffect(()=>{
    setTimeout(()=>{
      setImage([
        {
          image: require('./../assests/images/Carousel1.png'),
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          image: require('./../assests/images/Carousel2.png'),
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          image: require('./../assests/images/Carousel3.png'),
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
      ])
    },2000)
  },[])

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