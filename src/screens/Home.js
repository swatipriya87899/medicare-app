import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';
import Card_Group from '../components/Card_Group';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import { useSelector, useDispatch } from 'react-redux';
import DropdownComponent from '../components/DropdownComponent';


const Home = () => {


  const { loader } = useSelector((store) => store.datas)


  //Carousel Image Of Home Page
  const carouselImages = [
    {
      image: require('./../assests/images/Carousel1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/Carousel2.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/Carousel1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
  ];

  return (
    <View style={styles.home}>

      {/* Navbar */}
      <Header ></Header>
    
      <ScrollView>
        
        {/* SearchBox */}
        <View style={styles.margin}>
          <Searchbox ></Searchbox>
        </View>

        {/* Carousel */}
        <Carousel
          image={carouselImages}
          component={<Preview />}
          width={300}></Carousel>

        {/* Filter Hospitals */}
        <DropdownComponent></DropdownComponent>

        {/* Loader  */}
        {loader && <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}><ActivityIndicator size="large" /></View>}
        {!loader && <View style={[styles.card_group, { paddingBottom: 150 }]}>
          <Card_Group/>
        </View>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#ffffff",
    flex:1
  },
  card_group: {
    alignItems: 'center',
  },
  margin: {
    marginTop: 20,
  },

});

export default Home;
