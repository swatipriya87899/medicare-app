import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Card from './Card';

const Card_Group = (props) => {

 
  return (

   <View>
    <Card name="Heritage Hospital Varansi" location='Lanka Varanasi, UP' image="https://content.jdmagicbox.com/comp/varanasi/v1/0542px542.x542.140731131447.n1v1/catalogue/dr-manoj-ranjan-heritage-hospitals-ltd--lanka-varanasi-radiologist-doctors-snsbr.jpg"></Card>
    <Card name="Heritage Hospital Varansi" location='Lanka Varanasi, UP' image="https://content.jdmagicbox.com/comp/varanasi/v1/0542px542.x542.140731131447.n1v1/catalogue/dr-manoj-ranjan-heritage-hospitals-ltd--lanka-varanasi-radiologist-doctors-snsbr.jpg"></Card>
    <Card name="Heritage Hospital Varansi" location='Lanka Varanasi, UP' image="https://content.jdmagicbox.com/comp/varanasi/v1/0542px542.x542.140731131447.n1v1/catalogue/dr-manoj-ranjan-heritage-hospitals-ltd--lanka-varanasi-radiologist-doctors-snsbr.jpg"></Card>
   </View>
  );
};

const styles = StyleSheet.create({
});

export default Card_Group;