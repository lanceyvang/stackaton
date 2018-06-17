import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, {PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions'


// const origin = {latitude: 37.3318456, longitude: -122.0296002};
// const destination = {latitude: 37.771707, longitude: -122.4053769};
// const location = {latitude: 37.798790, longitude: -122.442753}
// let initialRegion={
//   latitude: 37.78825,
//   longitude: -122.4324,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// }


const origin = { latitude: 40.5810297, longitude: -73.828232 };
const destination = { latitude: 40.6577384, longitude: -73.9601139 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyBwkfxv_va0TvU54Aho_zaNWxbi6_-XJMM';

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 2 }}
          initialRegion={{
            latitude: 40.7050758,
            longitude: -74.0091604,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker coordinate={origin} />
          
          <MapViewDirections
            origin={origin}
            // destination={this.props.navigation.state.params.currentCoords}
            apikey={GOOGLE_MAPS_APIKEY}
            mode="transit"
          />
        </MapView>
        <View style={{ flex: 1 }}>
        </View>
      </View>
    );
  }
}
