import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker } from "react-native-maps";

const hometownHotpot = { latitude: 40.7194, longitude: 73.9968 };
const destination = { latitude: 37.33170303, longitude: -122.03024001 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyBwkfxv_va0TvU54Aho_zaNWxbi6_-XJMM';

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
         apikey={GOOGLE_MAPS_APIKEY}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 2 }}
          initialRegion={{
            latitude: 40.7050758,
            longitude: -74.0091604,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={origin} />
          <Marker coordinate={hometownHotpot} />
          
         
        </MapView>
        <View style={{ flex: 1 }}>
        </View>
        <Text>Friends INFO</Text>
      </View>
    );
  }
}
