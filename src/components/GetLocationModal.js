import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Cross from 'react-native-vector-icons/Entypo';
import GPS from 'react-native-vector-icons/MaterialCommunityIcons'

import AutoFillAddress from "./../components/AutoFillAddress";

import Modal from 'react-native-modal';

const GetLocationModal = (props) => {

  const [show, SetShow] = useState(true);

  const hideComponent = ()=>{
    SetShow(false)
  }

  const showComponent = ()=>{
    SetShow(true)
  }

  return (
    <KeyboardAvoidingView>
      <Modal isVisible={props.visibility}>
        <View style={styles.container}>
          {/* Icon */}
         <View style={{marginTop: 10, marginRight:10}}><Cross onPress={()=>{props.closeModal()}} name="cross" size={25} color="#fff" style={{textAlign:'right'}}></Cross></View>
          {/* Title Text */}
          <View>
            <Text style={styles.title} >Search for Nearby Hospitals</Text>
          </View>
          {/* AutoFillAddress Component */}
          <View style={
            {
              flex: 1,
              backgroundColor: "#064635",
              width: "70%",
              alignSelf: "center",
              height: "80%",
              marginTop: "10%"
            }
          }>
            <AutoFillAddress setModalVisible={props.setModalVisible} setLocation={props.setLocation} hide={hideComponent} show={showComponent}></AutoFillAddress>
          </View>
          {/* Button */}
          {show ? <View style={
            {
              position: "absolute",
              alignItems: "center",
              alignSelf: "center",
              justifyContent:"center",
              width: "70%",
              top: "55%"
            }
          }>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Search Location</Text>
            </TouchableOpacity>
          </View> : ""}

          {/* Horizontal Line */}
          {show ? <View style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#146356",
            height: 2,
            position: "absolute",
            top: "73%"
          }}></View> : ""}

          {/* Current Location Button */}
          {show ? <TouchableOpacity onPress={
            ()=>{
              props.fetchLocation();
              props.setModalVisible();
            }
          } style={{
            alignSelf: "center",
            alignItems: "center",
            backgroundColor: "#146356",
            width: "70%",
            position: "absolute",
            top: "80%",
            padding: "3%",
            borderRadius: 4,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <View>
              <GPS name="crosshairs-gps" size={25} color="#fff"></GPS>
            </View>
            <View>
              <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>Get Current Location</Text>
              <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>Using GPS</Text>
            </View>
          </TouchableOpacity> : ""}
        </View>
      </Modal>
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#064635",
    flex: 0.5,
    borderRadius:10 
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 40,
    fontWeight:"700"
  },
  button: {
    justifyContent:"center",
    alignItems: "center",
    borderRadius:3,
    marginTop: 10,
    width: "100%"
  },
  buttonText: {
    paddingTop:10,
    width: "100%",
    height: 45,
    color: "#064635",
    textAlign: "center",
    fontSize:16,
    fontWeight:"400",
    backgroundColor: "#F9D026",
    borderRadius:5
  }
})

export default GetLocationModal;