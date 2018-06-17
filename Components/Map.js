import React, { Component } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const GOOGLE_MAPS_APIKEY = "AIzaSyBwkfxv_va0TvU54Aho_zaNWxbi6_-XJMM";

const burgerLob = { latitude: 40.7402, longitude: 73.9934 };

const placesToEat = [
  {
    tite: "HomeTown HotPot",
    coordinate: { latitude: 40.7194, longitude: -73.9968 },
    description: 'Best Hot Pot in NYC',
    image: '../bbq.jpeg'
  },
  {
    title: "Picnic Garden",
    coordinate: { latitude: 40.650002, longitude:  -73.949997 },
    description: 'Best Korean BBQ in Queens',
    image: '../bbq.jpeg'
  }
];

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          apikey={GOOGLE_MAPS_APIKEY}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 10 }}
          initialRegion={{
            latitude: 40.7050758,
            longitude: -74.0091604,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          
            {placesToEat.map((place, index) => (
              <Marker
              style={{ flex: 1 }}
                key={index}
                title={place.title}
                image={require('../bbq.jpeg')}
                description={place.description}
                coordinate={place.coordinate}
                
                
              />
            ))}
          

          <Marker  coordinate={burgerLob} title={'testing'} description={'this is a test!'} />
          
        </MapView>

      </View>
    );
  }
}
