import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import config from './../../config';
import { useDispatch } from 'react-redux';
import { getNearbyHospitals, loader } from '../redux/action';

const data = [
  { label: 'Neurological', value: 'Ayurveda' },
  { label: 'Cardiovascular', value: 'Yoga' },
  { label: 'Gastrointestinal', value: 'Naturopathy' },
  { label: 'Orthopedic', value: 'Unani' },
  { label: 'Pulmonary', value: 'Siddha' },
  { label: 'Renal', value: 'Homeopathy' },
  { label: 'Gastrointestinal', value: 'Government' },
  { label: 'Endocrine', value: 'Private' }
];

const DropdownComponent = (props) => {

  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (value) {
      dispatch(loader(true))
      fetch(`${config.Base_API_URL}/hospital/getNearbyHospitalsWithFilter`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude: props.location.latitude,
          longitude: props.location.longitude,
          radius: 3000,
          mode: "D",
          query: value.toLowerCase()
        })
      }).then(response => response.json()).then(
        (data) => {
          dispatch(getNearbyHospitals(data))
          dispatch(loader(false))
        }
      )
    }
  }, [value])

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