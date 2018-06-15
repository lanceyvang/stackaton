import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBwkfxv_va0TvU54Aho_zaNWxbi6_-XJMM';



class Map extends Component {
	constructor() {
		super();
		this.state = {
      region:{
        latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
      }
    };
	}

	render() {
    return (
      <View styles={styles.container}>
        <Text>Hi</Text>
        <MapView 
                apikey={GOOGLE_MAPS_API_KEY}
                provider={PROVIDER_GOOGLE}
                
                styles={styles.map} 
                region={this.state.region}
                  />
                 
      </View>
    )
	}
}

export default Map;


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  }
})