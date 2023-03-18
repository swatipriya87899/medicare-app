import React,{useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import Car from 'react-native-vector-icons/FontAwesome';
import Bike from 'react-native-vector-icons/MaterialCommunityIcons';
import Walk from 'react-native-vector-icons/FontAwesome5';
import DownArrow from 'react-native-vector-icons/SimpleLineIcons';
import Compass from 'react-native-vector-icons/FontAwesome5';
import Share from 'react-native-vector-icons/Entypo';
import Button from './Button';

const MapDetails = props => {

  const [toogle, setToogle] = useState(false); 


  // //Calculate speed for car,bike, walk
  // const [speed, setSpeed] = useState({
  //   car: props.details.distance)/30,
  //   bike: parseInt(props.details.distance)/24,
  //   walk: parseInt(props.details.distance)/5
  // })

  //Toogle Handling function (display details)
  const handleToggling = () => {
    setToogle(!toogle)
  }
  return (
    <View style={styles.map_details}>
      <View style={{alignItems: 'center'}}>
        <DownArrow name="arrow-down" size={30} color="#146356" onPress={handleToggling}></DownArrow>
      </View>
      {toogle && <View style={{marginLeft: 20}}>
        <Text style={[styles.hospital_name, styles.text_style]}>
          {props.name}
        </Text>
        <Text style={[styles.hospital_city, styles.text_style]}>{props.city}</Text>
        <Text style={[styles.hospital_address, styles.text_style]}>
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.hospital_status, {fontSize:18}]}>Open</Text>
          <Text style={[styles.hospital_status, styles.text_style, {fontSize:18}]}>
            Closes 20:00
          </Text>
        </View>
        <View>
          <View style={styles.flexRow}>
            <Car name="car" size={25} color="#000000"></Car>
            <Text style={styles.text_style}>{Math.floor(parseInt(props.details.distance)/30)} hr {parseInt(props.details.distance)%30} min</Text>
          </View>
          <View style={styles.flexRow}>
            <Bike name="motorbike" size={25} color="#000000"></Bike>
            <Text style={styles.text_style}>{Math.floor(parseInt(props.details.distance)/24)} hr {parseInt(props.details.distance)%24} min</Text>
          </View>
          <View style={styles.flexRow}>
            <Walk name="walking" size={25} color="#000000"></Walk>
            <Text style={styles.text_style}>{Math.floor(parseInt(props.details.distance)/5)} hr {parseInt(props.details.distance)%4} min</Text>
          </View>
        </View>
        <View></View>

        {/* Line Seperator */}
        <View style={styles.line_seperator}></View>
        <View style={[styles.details_footer]}>
          <Button title="Direction" button_style={{backgroundColor: '#007FFF', borderRadius:25, color: '#FFFFFF'}} icon={Compass} icon_name="compass" icon_size={20} icon_color=" #FFFFFF"></Button>
          <Button title="Share" button_style={{backgroundColor: '#FFFFFF', borderRadius:25, color: '#146356', borderWidth:1, borderColor:'#146356'}} icon={Share} icon_name="share" icon_size={20} icon_color=" #146356"></Button>
          <View>
          <Text style={styles.distance}>{props.details.distance} KM</Text>
          <Text style={[styles.text_style, {fontSize:10}]}>TO GO</Text>
          </View>
        </View>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  map_details: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    // flex: 0.5,
  },
  text_style: {
    color: '#000000',
    marginEnd: 10,
  },
  hospital_name: {
    fontSize: 24,
    fontWeight: '800',
  },
  hospital_city: {
    fontSize: 18,
    fontWeight: '600',
  },
  hospital_address: {
    fontWeight: '300',
  },
  hospital_status: {
    fontWeight: '600',
    color: '#1C730F',
    fontWeight: '600',
    marginEnd: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line_seperator: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  details_footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  distance:{
    color:'#146356',
    fontSize:16,
    fontWeight:'800'
  }
});

export default MapDetails;