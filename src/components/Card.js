import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';


const Card = (props) => {
  const navigation = useNavigation();

  function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

props.type = props.type.map((item)=> capitalize(item))

  return (
    <View style={styles.card}>
      {/* Image of the Hospital */}
      <View style={styles.card_image_box}>
        <Image source={{ uri: props.image }} style={[styles.card_image, { width: "100%", height: "100%" }]} />
      </View>


      {/* Type of Hospital */}
      <Text style={styles.hospital_type}>{props.type.join(", ")}</Text>

  

      {/* Name of the Hospital */}
      <Text style={[styles.card_title, styles.font_style]}>{props.name}</Text>

      {/* Hospital City Name */}
      <Text style={[styles.card_subtitle, styles.font_style]}>{props.city}</Text>

      <View style={styles.card_details}>
        <View>
          <Text style={[styles.font_style]}>OPEN</Text>
          <Text style={[styles.font_style]}>{props.distance} KM From Here</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('map', { lat: props.latitude, long: props.longitude, currentLocation: props.location, name: props.name, city: props.city })}><Icon name="globe" size={25} color="#26e07f" /></TouchableOpacity>
          <Icon name="phone" size={25} color="#26e07f" />
        </View>
      </View>

      <Button title="View Details" button_style={{ width: "80%" }} navigation_link="details" id={props.id}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#064635',
    margin: 1,
    marginBottom: 20,
    borderRadius: 7,
    padding: 5,
    flex: 1,
  },
  card_image: {
    borderRadius: 7,
  },
  font_style: {
    color: '#FEFFDE',
  },
  card_title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card_image_box: {
    width: '100%',
    height: 150,
    alignItems: 'center',
  },
  card_subtitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  card_button: {
    display: 'flex',
    alignItems: 'center',
  },
  button_text: {
    backgroundColor: '#DDFFBC',
    borderRadius: 8,
    width: '80%',
    paddingVertical: 10,
    color: '#064635',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card_details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hospital_type: {
    backgroundColor: '#F9D026',
    width: "70%",
    position: "absolute",
    right: 0,
    paddingVertical: 5,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    textAlign: 'center',
    top: 20,
    color: ' #146356',
    fontSize: 16
  }
});

export default Card;