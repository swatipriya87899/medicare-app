import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import Carousel from './Carousel';
import Doctor from 'react-native-vector-icons/Fontisto';
import Bed from 'react-native-vector-icons/FontAwesome';
import VacentBed from 'react-native-vector-icons/Fontisto';
import Outpatient from 'react-native-vector-icons/MaterialCommunityIcons';
import Impatient from 'react-native-vector-icons/MaterialCommunityIcons';
import Info from 'react-native-vector-icons/Feather';
import Call from 'react-native-vector-icons/MaterialIcons';
import Directions from 'react-native-vector-icons/FontAwesome5';
import Globe from 'react-native-vector-icons/FontAwesome5';
import Share from 'react-native-vector-icons/Entypo';
import Button from './Button';
import Review from './Review';
import config from './../../config';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Details_Page = ({ route }) => {

  const [id] = useState(route.params.id);

  const [hospitalsData, setHospitalsData] = useState();

  const navigation = useNavigation();


  useEffect(() => {
    fetch(`${config.Base_API_URL}/hospital/details/${id}`).then((response) => response.json()).then(
      (data) => {
        setHospitalsData(data);
      }
    )
  }, [])

  //Carousel Image Of Home Page
  const carouselImages = [
    {
      image: require('./../assests/images/ayush_hospital.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/ayush_hospital2.jpg'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
  ];

  //Hospital Information
  const hospitalInfo = [
    {
      component: Doctor,
      name: 'doctor',
      desc: 'Doctor 200',
    },
    {
      component: VacentBed,
      name: 'bed-patient',
      desc: 'Vacant bed 100+ (Today)',
    },
    {
      component: Bed,
      name: 'bed',
      desc: 'Total bed 500+',
    },
    {
      component: Impatient,
      name: 'human-wheelchair',
      desc: 'Inpatient 300',
    },
    {
      component: Outpatient,
      name: 'human-white-cane',
      desc: 'Outpatient 250',
    },
  ];

  const hospitalContact = [
    {
      component: Call,
      name: 'call',
      desc: 'Call',
    },
    {
      component: Directions,
      name: 'directions',
      desc: 'Map',
    },
    {
      component: Globe,
      name: 'globe-asia',
      desc: 'Website',
    },
    {
      component: Share,
      name: 'share',
      desc: 'Share',
    },
  ];

  //Rendering Hospital Info Using FlatList
  const renderHospitalInfo = ({ item }) => (
    <View style={{ marginLeft: 15, marginVertical: 30 }}>
      <item.component name={item.name} size={30} color="#FFFFFF" />
      <Text style={{ width: 100, color: 'white' }}>{item.desc}</Text>
    </View>
  );

  //Rendering Hospital Contact Using FlatList
  const renderHospitalContact = ({ item }) => (
    <View style={{ marginLeft: 10, marginVertical: 30 }}>
      <item.component name={item.name} size={30} color="#FFFFFF" />
      <Text style={{ width: 100, color: 'white' }}>{item.desc}</Text>
    </View>
  );

  return (
    <View>
      {hospitalsData &&
        <ScrollView>
          {/* Hospital Carousel */}
          <Carousel
            image={carouselImages}
            component={
              <Preview
                container={{ marginRight: 0, marginLeft: 0 }}
                preview={{ borderRadius: 0, height: 222 }}
              />
            }
            width={500}></Carousel>

          {/* Hospital Details */}
          <View style={[styles.hospital_details]}>
            <Text style={[styles.hospitals_name, styles.text_style]}>
              {hospitalsData.hospitalName}
            </Text>
            <Text style={[styles.hospital_address, styles.text_style]}>
              {hospitalsData.contactInfo.address.addressLine1} {hospitalsData.contactInfo.address.street} {hospitalsData.contactInfo.address.city} {hospitalsData.contactInfo.address.state} {hospitalsData.contactInfo.address.country}
            </Text>

            {/* Displaying Hospital Info i.e available doctor, vacent beds etc. */}
            <FlatList
              horizontal
              data={hospitalInfo}
              renderItem={renderHospitalInfo}
              keyExtractor={item => item.name}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Button
                title="Open now"
                button_style={{
                  backgroundColor: '#FFFFFF',
                  color: '#1D9B0A',
                  marginLeft: 10,
                }}></Button>
              <Text style={[styles.text_style, { marginLeft: 10 }]}>
                6:30am – 10:30pm (Today)
              </Text>
              <Info
                name="info"
                size={20}
                color="#FFFFFF"
                style={{ marginLeft: 10 }}></Info>
            </View>

            {/* Displaying Hospital Contact i.e call, map, website etc. */}
            <FlatList
              horizontal
              data={hospitalContact}
              renderItem={renderHospitalContact}
              keyExtractor={item => item.name}
            />

             <TouchableOpacity>
            <Button title="Book Appointment" navigation_link="chose_doctor"
              button_style={{
                backgroundColor: '#F9D026',
                color: '#074E95',
                marginLeft: 10,
                width: "80%"
              }}></Button>
              </TouchableOpacity>
      
          </View>

          {/* Review Section */}
          <Review></Review>
        </ScrollView>}
    </View>
  );
};

const styles = StyleSheet.create({
  hospital_details: {
    backgroundColor: '#064635',
    paddingVertical: 30
  },
  text_style: {
    color: '#FFFFFF',
    marginTop: 10,
  },
  hospitals_name: {
    fontSize: 24,
    fontWeight: '600',
  },
  hospital_address: {
    width: 300,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Details_Page;
