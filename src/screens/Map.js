import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TrackLocation from '../components/TrackLocation';

const Map = ({route}) => {

  // Latitude and Longitude for maps
  const [lat] = useState(route.params.lat);
  const [long] = useState(route.params.long);
  const [currentLocation] = useState(route.params.currentLocation);
  const [name] = useState(route.params.name);
  const [city] = useState(route.params.city)

  // Distance and Time Value
  const [travel_details, setTravel_details] = useState({
    time: 0,
    distance: 0,
  });


  //function to take time and date from its children (TrackLocation)
  const fetchDetails = (d,t) => {
    setTravel_details(prev=>({...prev, time:t, distance:d}));
  }

  return (
    <View style={{flex: 1}}>
      <TrackLocation fetchDetails={fetchDetails} lat={lat} long={long} currentLocation={currentLocation}/>
      {/* <MapDetails  name={name} city={city} details={travel_details}></MapDetails> */}
    </View>

  );
};

const styles = StyleSheet.create({});
export default Map;