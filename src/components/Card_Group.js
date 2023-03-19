import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Card from './Card';
import config from '../../config';
import { useSelector, useDispatch } from 'react-redux';
import {getNearbyHospitals, loader} from './../redux/action'

const Card_Group = (props) => {

  const dispatch = useDispatch();

  const [hospitalsData, setHospitalsData] = useState([]);
  const [data, setData] = useState([])

  const {nearByHospital} = useSelector((store) => store.datas);

  useEffect(() => {
   
    // setTimeout(()=>{
      fetch(`${config.Base_API_URL}/hospital/getNearbyHospitals`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "latitude": props.location.latitude,
          "longitude": props.location.longitude,
          "radius": 500,
          "mode": "D"
        })
      }).then((response) => {
        return response.json()
      }).then((data) =>{ dispatch(getNearbyHospitals(data)); })
    // },10000)

  }, [props.location])

  const renderItem = ({ item }) => <Card name={item.details.hospitalName} location={props.location} image={ item.details.images[0]} city={item.details.contactInfo.address.city} status={item.status} distance={parseInt(item.location.distance) / 1000} id={item.details._id} phone={ item.details.phoneNumber} latitude={item.location.latitude} longitude={item.location.longitude} type={item.details.hospitalType}></Card>;

  return (
    <View style={{backgroundColor:"#ffffff"}}>{nearByHospital && <FlatList
      data={nearByHospital}
      renderItem={renderItem}
      keyExtractor={item => item.name}></FlatList>}
      </View>
  );
};

const styles = StyleSheet.create({
});

export default Card_Group;