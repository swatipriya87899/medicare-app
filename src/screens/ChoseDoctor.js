import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DoctorDetails from '../components/DoctorDetails';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import Nav from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChoseDoctor = () => {
  const doctor_details = [
    {
      name: 'Dr. Ankit Singh',
      specialist: 'Cardiologist',
    },
    {
      name: 'Dr. Swati Priya',
      specialist: 'Urologist',
    },
    {
      name: 'Dr. Shivam Jha',
      specialist: 'Cardiologist',
    },
    {
      name: 'Dr. Ankit Kumar',
      specialist: 'Cardiologist',
    },
  ];

  return (
    <View>
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

      <Searchbox></Searchbox>
      <Text style={styles.heading}>Select a Doctor</Text>

      {/* Doctor Details */}
      <FlatList
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}
        data={doctor_details}
        renderItem={({item}) => (
          <DoctorDetails
            name={item.name}
            specialist={item.specialist}
            showMore="false"></DoctorDetails>
        )}
        keyExtractor={item => item.id}
      />
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

export default ChoseDoctor;
