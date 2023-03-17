import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

export default (Preview = ({
  item,
  imageKey,
  container,
  preview
}) => {
  return (
    <View
      style={[styles.videoContainer, container]}>
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          style={[styles.videoPreview, preview]}
          source={item[imageKey]}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  videoContainer: {
    width: 275,
    height:220,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft:  10
  },
  videoPreview: {
    width: 275,
    height: 155,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});