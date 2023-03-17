import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import config from './../../config';
import { useDispatch } from 'react-redux';
import { getNearbyHospitals, loader } from '../redux/action';

const data = [
  { label: 'Ayurveda Hospital', value: 'Ayurveda' },
  { label: 'Yoga Hospital', value: 'Yoga' },
  { label: 'Naturopathy Hospital', value: 'Naturopathy' },
  { label: 'Unani Hospital', value: 'Unani' },
  { label: 'Siddha Hospital', value: 'Siddha' },
  { label: 'Homeopathy Hospital', value: 'Homeopathy' },
  { label: 'Government Hospital', value: 'Government' },
  { label: 'Private Hospital', value: 'Private' }
];

const DropdownComponent = (props) => {

  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);



  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#064635' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Filter Hospitals..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    width: "90%",
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});