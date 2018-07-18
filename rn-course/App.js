import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';


export default class App extends React.Component {

state ={
  places: []
}


placeAddedHandler = placeName =>{
 
  this.setState(prevState =>{
    return {
      places: prevState.places.concat(placeName)
    }
  });
};

placeDeletedHandler = index =>{
  this.setState(prevState=>{
    return {
    // Filter method filter the aaray ans return the new array
    //The logic below will only return the places "not selected to be delete, will filter out the place with the index selected"
      places: prevState.places.filter((place, i)=>{
        return i !== index;
      })
    }
  });
}



  render() {
  
    return (

      <View style={styles.container}>
      
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  
});
