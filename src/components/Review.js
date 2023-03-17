import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';
import User_Review from './User_Review';

const Review = () => {
  //Store Reviews
  const [text, onChangeText] = React.useState('');

  return (
    <View style={{backgroundColor:'#ffffff'}}>
      <View style={{marginHorizontal:25}}>
        <Text style={[styles.heading, styles.line_gap]}>Rate and review</Text>
        <Text style={styles.line_gap}>Share your experience to help others</Text>
        <View style={[styles.line_gap, {flexDirection: 'row'}]}>
          <Star name="star-o" size={30} color="#064635" style={{marginRight:8}}/>
          <Star name="star-o" size={30} color="#064635" style={{marginRight:8}}/>
          <Star name="star-o" size={30} color="#064635" style={{marginRight:8}}/>
          <Star name="star-o" size={30} color="#064635" style={{marginRight:8}}/>
          <Star name="star-o" size={30} color="#064635" style={{marginRight:8}}/>
        </View>
        <TextInput
          style={styles.review_input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Write Your Experience"></TextInput>
      </View>

      {/* User's Review */}
      <User_Review></User_Review>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '600',
  },
  review_input: {
    borderBottomWidth: 1,
    borderBottomColor: '#A09E9E',
    marginBottom: 50,
  },
  line_gap:{
    marginTop:10
  }
});

export default Review;
