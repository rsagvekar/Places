//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {saveHistory} from '../redux/Actions/CommonActions';

const height = Dimensions.get('screen').height;
const MapScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [history, setHistory] = useState([]);

  const handlePlaceSelect = placeDetails => {
    const place = {
      latitude: placeDetails.geometry.location.lat,
      longitude: placeDetails.geometry.location.lng,
      name: placeDetails.name,
      address: placeDetails.formatted_address,
    };
    setSelectedPlace(place);
    dispatch(saveHistory(place));
  };

  useEffect(() => {
    const fetchHistory = async () => {
      const storedHistory = await AsyncStorage.getItem('searchHistory');
      console.log('storedHistory', storedHistory);

      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    };
    fetchHistory();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search for a place"
          minLength={2}
          fetchDetails={true}
          onPress={(data, details = null) => {
            handlePlaceSelect(details);
          }}
          query={{
            key: 'AIzaSyBg2UIaZE_0hhQAM6cib4XabNi73Y3ReRk',
            language: 'en',
          }}
          styles={{
            textInputContainer: {
              width: '100%',
              zIndex: 10, // Ensuring the input field is on top
              position: 'relative',
              backgroundColor: 'white', // Optional for better contrast
            },
            textInput: {
              height: 40,
              borderColor: '#ddd',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        />
      </View>
      <MapView
        style={{height: height * 0.8,}}
        region={{
          latitude: selectedPlace ? selectedPlace.latitude : 37.7749,
          longitude: selectedPlace ? selectedPlace.longitude : -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {selectedPlace && (
          <Marker
            coordinate={{
              latitude: selectedPlace.latitude,
              longitude: selectedPlace.longitude,
            }}
            title={selectedPlace.name}
            description={selectedPlace.address}
          />
        )}
      </MapView>
      {/* <Text>MapScreen</Text> */}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#696969',
    borderRadius: 10,
    paddingLeft: 10,
    elevation: 5,
  },
});

//make this component available to the app
export default MapScreen;

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
// import {saveHistory} from '../redux/Actions/CommonActions';

// const height = Dimensions.get('screen').height;
// const MapScreen1 = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();

//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [history, setHistory] = useState([]);

//   const handlePlaceSelect = placeDetails => {
//     const place = {
//       latitude: placeDetails.geometry.location.lat,
//       longitude: placeDetails.geometry.location.lng,
//       name: placeDetails.name,
//       address: placeDetails.formatted_address,
//     };
//     setSelectedPlace(place);
//     dispatch(saveHistory(place));
//   };

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const storedHistory = await AsyncStorage.getItem('searchHistory');
//       console.log('storedHistory', storedHistory);

//       if (storedHistory) {
//         setHistory(JSON.parse(storedHistory));
//       }
//     };
//     fetchHistory();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Google Places Autocomplete */}
//       <View style={styles.autocompleteContainer}>
//         <GooglePlacesAutocomplete
//           placeholder="Search for a place"
//           minLength={2}
//           fetchDetails={true}
//           onPress={(data, details = null) => {
//             handlePlaceSelect(details);
//           }}
//           query={{
//             key: 'AIzaSyBg2UIaZE_0hhQAM6cib4XabNi73Y3ReRk',
//             language: 'en',
//           }}
//           styles={{
//             textInputContainer: {
//               width: '100%',
//               zIndex: 10, // Ensuring the input field is on top
//               position: 'relative',
//               backgroundColor: 'white', // Optional for better contrast
//             },
//             textInput: {
//               height: 40,
//               borderColor: '#ddd',
//               borderWidth: 1,
//               borderRadius: 10,
//               paddingLeft: 10,
//             },
//             predefinedPlacesDescription: {
//               color: '#1faadb',
//             },
//           }}
//         />
//       </View>

//       <View>
//         <ScrollView>
//           {history.map(item => {
//             /* Render history here */
//           })}
//         </ScrollView>
//       </View>

//       {/* MapView */}
//       <MapView
//         style={styles.map}
//         region={{
//           latitude: selectedPlace ? selectedPlace.latitude : 37.7749,
//           longitude: selectedPlace ? selectedPlace.longitude : -122.4194,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}>
//         {selectedPlace && (
//           <Marker
//             coordinate={{
//               latitude: selectedPlace.latitude,
//               longitude: selectedPlace.longitude,
//             }}
//             title={selectedPlace.name}
//             description={selectedPlace.address}
//           />
//         )}
//       </MapView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   autocompleteContainer: {
//     position: 'absolute',
//     top: 50, // Ensure it's high enough to not be blocked by map
//     left: 0,
//     right: 0,
//     zIndex: 10, // Keep the input above everything else
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//     elevation: 5, // To add a shadow effect on Android
//   },
//   map: {
//     height: height * 0.8,
//     zIndex: 0, // Ensure map stays behind autocomplete input
//   },
// });

// export default MapScreen1;
