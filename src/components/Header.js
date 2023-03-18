import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from 'react-native-vector-icons/Fontisto';
import { useDispatch } from 'react-redux';
import { openDrawer } from '../redux/action';
import { useSelector } from "react-redux";


import config from '../../config';

const Header = (props) => {

  const dispatch = useDispatch();

  const draw = useSelector((store) => store.datas.openDrawer)

  const [place, setPlace] = useState("Varanasi");

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.location.latitude},${props.location.longitude}&key=${config.key.google_map}`).then(response => response.json()).then(
      (placeData) => {
        setPlace(placeData.results[0].address_components[1].short_name)
      }
    )
  }, [props.location])

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={()=>dispatch(openDrawer(!draw))}>
          <Nav name="nav-icon-a" size={25} color="#064635"></Nav>
        </TouchableOpacity>
        {/* App-name */}
        <Text style={styles.name}>Medicare</Text>
      </View>

      {/* location */}
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={props.changeLocation}>
        <View style={styles.location_box}>
          <Icon name="map-marker" size={20} color="#064635" />
          <Text style={styles.location}>{place}</Text>
        </View>
        <Text style={styles.change_location}>Change Location</Text>
      </TouchableOpacity>
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
});

export default Header;
