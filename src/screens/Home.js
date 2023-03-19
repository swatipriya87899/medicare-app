import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import Card_Group from '../components/Card_Group';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import GetLocationModal from '../components/GetLocationModal';
import { useSelector, useDispatch } from 'react-redux';
import GetLocation from 'react-native-get-location';
import DropdownComponent from '../components/DropdownComponent';
import Chatbot from '../components/Chatbot';
import { openBot } from './../redux/action'


const Home = () => {

  const dispatch = useDispatch();

  const { loader } = useSelector((store) => store.datas)

  const [location, setLocation] = useState({ "latitude": 25.5941, "longitude": 85.1376 })


  const fetchLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLocation({ "latitude": location.latitude, "longitude": location.longitude });
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  useEffect(() => {
    fetchLocation();
  }, [])

  const [modalVisible, setModalVisible] = useState(false);

  //Change Location Modal
  const changeLocationHandler = () => {
    setModalVisible(true);
  };

  //function to set modalVisible false
  const closeTheModal = () => {
    setModalVisible(false);
  }



  //Carousel Image Of Home Page
  const [carouselImages,setCarouselImages] = useState([
    {
      image: require('./../assests/images/TB1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/TB2.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/TB3.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
  ]);

  return (
    <View style={styles.home}>
      <Header location={location} changeLocation={changeLocationHandler}></Header>
      <TouchableOpacity onPress={() => dispatch(openBot(true))} style={{ width: 200, height: 200, position: 'absolute', bottom: -25, zIndex: 2, right: 26, alignSelf:'flex-end' }} ><Image source={require('./../assests/images/bot_popup.png')}
        style={{ width: "100%", height: "100%" }} resizeMode="contain"></Image></TouchableOpacity>

      <ScrollView>
        <View style={styles.margin}>
          <Searchbox location={location}></Searchbox>
        </View>
        <Carousel
          image={carouselImages}
          component={<Preview />}
          width={300}></Carousel>

        {/* Filter Hospitals */}
        <DropdownComponent location={location}></DropdownComponent>

        {/* Loader  */}
        {loader && <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 1 }}><ActivityIndicator size="large" /></View>}
        {!loader && <View style={[styles.card_group, { paddingBottom: 150 }]}>
          <Card_Group location={location} />
        </View>}
      </ScrollView>
      <GetLocationModal fetchLocation={fetchLocation} setModalVisible={setModalVisible} setLocation={setLocation} closeModal={closeTheModal} visibility={modalVisible} ></GetLocationModal>
      <Chatbot></Chatbot>
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
