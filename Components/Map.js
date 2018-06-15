// import React from "react";
// import { StyleSheet, Text, View, Image} from "react-native";
// import { Card } from 'react-native-elements';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// const users = [
//     {
//         name: 'Ozal',
//         uri: 'https://cdn.foodbeast.com/wp-content/uploads/2017/06/Webp.net-compress-image.jpg',
//         description: `|||${this.name}|||| Cajun style pasta?`,
//         comments: ['look good!'],
//         tags: ['spicy']

//     },
//     {
//         name: 'Yang',
//         uri: 'https://cdn.foodbeast.com/wp-content/uploads/2017/06/Webp.net-compress-image.jpg',
//         description: `|||${this.name}|||| Prime rib?`,
//         comments: ['delicious!'],
//         tags: ['juicy']
//     }
// ]






// const Home = () => (

//     <View>
//     <Text>See What your friend are eating!</Text>
//   {
//     users.map((u, i) => {
//       return (
//         <View key={i} >
//           <Image
//             resizeMode="cover"
//             source={{ uri: u.uri }}
//           />
//           <Text >{u.name}</Text>
//         </View>
//       );
//     })
//   }
// </View>
//   );
// export default Home;

import React from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const Test = () => (
  <View style={styles.container}>
    <Text>Map Screen</Text>

  </View>
);

export default Test;
