import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { getNearbyHospitals, loader } from '../redux/action';
import {colors} from "../variable"

import config from './../../config';

const Searchbox = (props) => {

    const dispatch = useDispatch();

    const [input, setInput] = React.useState("");


    const updateCards = () => {
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
                query: input.toLowerCase()
            })
        }).then(response => response.json()).then(
            (data) => {
                dispatch(getNearbyHospitals(data))
                dispatch(loader(false))
            }
        )
        setInput("");
    }

    const onSearch = (value) => {
        setInput(value);
    }

    return (
        <View style={styles.searchboxContainer}>
            <TextInput style={styles.searchbox} placeholder="Search Hospitals, Treatments..." value={input} onChangeText={onSearch}></TextInput>
            <TouchableOpacity onPress={updateCards} style={styles.search_icon}>
                <Icon name='ios-search-outline' size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchboxContainer: {
        display: "flex",
        alignItems: "center"
    },

    searchbox: {
        backgroundColor: colors.lightColor,
        justifyContent: 'center',
        width: "85%",
        borderRadius: 8,
        paddingLeft:20
    },
    search_icon: {
        position: 'absolute',
        right: 60,
        top: 6
    }
})

export default Searchbox