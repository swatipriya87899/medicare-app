import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Searchbox from '../components/Searchbox';
import Slot from '../components/Slot';
import Nav from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StaticButton from '../components/StaticButton';

const AvailableSlot = () => {
  const slots = [
    {
      timing: '10.30 AM',
    },
    {
      timing: '11.30 AM',
    },
    {
      timing: '12.30 AM',
    },
    {
      timing: '10.30 AM',
    },
  ];
  return (
    <View>
      {/* <Header /> */}
      <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Nav name="nav-icon-a" size={25} color="#064635"></Nav>
        {/* App-name */}
        <Text style={styles.name}>Medicare</Text>
      </View>

      {/* location */}
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <View style={styles.location_box}>
          <Icon name="map-marker" size={20} color="#064635" />
          <Text style={styles.location}>Banaras Hindu University Cam</Text>
        </View>
        <Text style={styles.change_location}>Change Location</Text>
      </TouchableOpacity>
    </View>
      <Searchbox />
      <Heading title="Available Slots"></Heading>
      <Slot slots={slots} date="Monday, 26 Aug 2022"></Slot>
      <Slot slots={slots} date="Monday, 26 Aug 2022"></Slot>
      {/* Button For Schedule Appointment */}
      <StaticButton
        title="Schedule Appointment"
        button_style={{
          backgroundColor: 'rgba(249, 208, 38, 0.98)',
          width: '80%',
        }}></StaticButton>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  },

  name: {
    color: '#146356',
    fontSize: 24,
    fontWeight: '700',
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  location_box: {
    flexDirection: 'row',
  },
  location: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 16,
  },
  change_location: {
    color: '#064635',
    fontWeight: '700',
    fontSize: 12,
  },
  heading: {
    color: '#064635',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 30,
  },
});

export default AvailableSlot;
