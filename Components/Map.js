import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, {PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = "AIzaSyBwkfxv_va0TvU54Aho_zaNWxbi6_-XJMM";
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const location = {latitude: 37.798790, longitude: -122.442753}
let initialRegion={
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}
class MapScreen extends Component {

  constructor(){
    super()
    this.state = {}
  }
 
  render() {
    return (
      <View>
        <Text>Map Screen</Text>
        <MapView initialRegion={initialRegion}>
  <MapViewDirections
    origin={origin}
    provider={PROVIDER_GOOGLE}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
  />
</MapView>
      </View>
    )
  }
}

export default MapScreen;

