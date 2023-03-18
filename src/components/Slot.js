import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import SubHeading from '../components/SubHeading';
import StaticButton from './StaticButton';

const Slot = ({slots, date}) => {
 
  return (
    <View style={styles.container}>
      <SubHeading title={date}></SubHeading>
      <View style={styles.button_group}>
        <FlatList
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
          data={slots}
          renderItem={({item}) => (
            <View style={{marginLeft: 5}}>
              <StaticButton
                title={item.timing}
                button_style={{
                  color: '#064635',
                  backgroundColor: '#ffffff',
                  borderWidth: 1,
                  borderColor: '#064635',
                  borderRadius: 30,
                }}></StaticButton>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
  button_group: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default Slot;
