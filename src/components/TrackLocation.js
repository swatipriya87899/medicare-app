import React, {useState, useRef, useEffect} from 'react';
import {Text, View, Button, StyleSheet, Modal, Image} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Marker} from 'react-native-maps';
import {GOOGLE_MAP_KEY} from '../constants/googleMapKey';
import MapDetails from './MapDetails';
import { locationPermission } from './MapHelperFunction';

const TrackLocation = (props) => {
  
  //Map Coordinates
  const [map, setMap] = useState({
    pickupCords: {
      latitude: props.currentLocation.latitude,
      longitude: props.currentLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: props.lat,
      longitude: props.long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  //Distance and Time Value
  const [travel_details, setTravel_details] = useState({});

  const {pickupCords, dropLocationCords} = map;
  const mapRef = useRef();


  //Calculating time and distance
  const travelDetails = (d, t) => {
    // setTravel_details({...travel_details, distance: d});
    // setTravel_details({...travel_details, time: t});
    props.fetchDetails(d,t);
  };

  
  

  return (
    <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={{width: '100%', height: '100%'}}
          initialRegion={pickupCords}>
          <Marker
            coordinate={pickupCords}
            image={require('./../assests/images/pickupMarker.png')}></Marker>
          <Marker
            coordinate={dropLocationCords}
            image={require('./../assests/images/dropMarker.png')} style={{width: 126, height: 128}}
           ></Marker>

          <MapViewDirections
            origin={pickupCords}
            destination={dropLocationCords}
            apikey={GOOGLE_MAP_KEY}
            strokeWidth={3}
            strokeColor="#064635"
            optimizeWaypoints={true}
            onReady={result => {
              //Calculate time and distance to reach the hospital
              travelDetails(result.distance, result.duration);
              //Styling the map
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 300,
                },
              });
            }}
          />
        </MapView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default TrackLocation;