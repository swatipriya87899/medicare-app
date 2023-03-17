import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';

const User_Review = () => {
  let rating = 3.5;
  return (
    <View>
      <View style={{flexDirection: 'row', marginLeft: 15, marginRight: 55}}>
        <Image
          source={require('./../assests/images/avatar_user1.jpg')}
          style={styles.user_avatar}></Image>
        <View>
          <Text style={styles.font_style}>Bhaskar Dubey</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={[styles.font_style, {marginRight:5}]}>{rating}</Text>
            <Rating
              fractions={2}
              ratingCount={5} 
              type='custom'
              ratingBackgroundColor="#ffffff"
              imageSize={20}
              startingValue={rating}
              readonly={true}
            />
          </View>
          <Text>
            Hospital is maintained excellently .No problems for patients .
            Thanks to Dr. Ankit and his team for giving greatest service to the
            patient ...
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor : "#A09E9E", height : 1, margin:20 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  user_avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  font_style: {
    fontWeight: '600',
    color: '#000000',
    fontSize: 16,
  },
});
export default User_Review;
