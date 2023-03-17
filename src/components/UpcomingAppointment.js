import React from 'react';
import { View,Text,FlatList } from 'react-native';
import DoctorDetails from './DoctorDetails';
import Header from './Header';
import Searchbox from './Searchbox';

const UpcomingAppointment = () => {

  //Doctor's details for upcoming appointments
  const details = [
    {
      name:"Ankit Singh",
      specialist:"Cardiologist"
    },
    {
      name:"Shivam Jha",
      specialist:"Cardiologist"
    },
    {
      name:"Shivam Jha",
      specialist:"Cardiologist"
    },

  ]
  return (
    <View>
        <Header/>
        <Searchbox/>
      
      <FlatList
      contentContainerStyle={{flexDirection : "row", flexWrap : "wrap", justifyContent:'space-evenly'}} 
        data={details}
        renderItem={({item}) => (
          
            <DoctorDetails
              name={item.name}
              specialist={item.specialist} container={{backgroundColor:'#EBEBEB', borderRadius:20}} showMore="true"></DoctorDetails>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default UpcomingAppointment