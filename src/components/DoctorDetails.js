import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Location from 'react-native-vector-icons/FontAwesome';
import Call from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const DoctorDetails = props => {

  const navigation = useNavigation();


  return (
    <TouchableOpacity onPress={()=>navigation.navigate("available_slot")}>
    <View style={[styles.details_container, props.container]}>
      {/* Doctor Image */}
      <Image
        source={require('./../assests/images/doctor1.png')}
        style={{
          resizeMode: 'cover',
          height: 150,
          width: "100%",
          borderRadius: 5,
        }}></Image>

      {/* Doctor Details */}
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.text_style, {fontWeight: '700'}]}>
          {props.name}
        </Text>
        <Text style={[styles.text_style, {marginTop: 20}]}>
          {props.specialist}
        </Text>
      </View>

      {/* Call and Location */}
      {props.showMore && (
        <View>
          <Text style={[styles.text_style, {marginBottom: 20}]}>
            Aditya Hospital
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Location name="map-marker" size={25} color="#064635" />
            <Call name="phone" size={25} color="#064635" />
          </View>

          <View style={styles.slot}>
            <Text style={[styles.text_style, {color: '#ffffff'}]}>
              01.30 PM
            </Text>
            <Text style={[styles.text_style, {color: '#ffffff'}]}>
              Sun, 22 Aug 2022
            </Text>
          </View>
        </View>
      )}
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  details_container: {
    marginTop: 20,
    width: 176,
    margin:5
  },
  text_style: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    textAlign: 'center',
  },
  slot: {
    backgroundColor: '#064635',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginVertical:10,
    paddingVertical:8
  },
});

export default DoctorDetails;
