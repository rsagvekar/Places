import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
// import Geolocation from '@react-native-community/geolocation';

import {saveHistory, showHistory} from '../redux/Actions/CommonActions';
import HistoryModal from '../components/HistoryModal';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const MapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params;
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.CommonReducer);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isAutocompleteFocused, setIsAutocompleteFocused] = useState(false);

  const handlePlaceSelect = placeDetails => {
    var place;
    if (placeDetails?.geometry?.location?.lat) {
      place = {
        latitude: placeDetails.geometry.location.lat,
        longitude: placeDetails.geometry.location.lng,
        name: placeDetails.name,
        address: placeDetails.formatted_address,
      };
    } else {
      place = {
        latitude: placeDetails.lat,
        longitude: placeDetails.lng,
        name: placeDetails.name,
        address: placeDetails.address,
      };
    }
    // const place = {
    //   latitude: placeDetails.geometry.location.lat,
    //   longitude: placeDetails.geometry.location.lng,
    //   name: placeDetails.name,
    //   address: placeDetails.formatted_address,
    // };

    const isDuplicate = reduxData.history.some(
      item =>
        item.latitude === place.latitude && item.longitude === place.longitude,
    );

    if (!isDuplicate) {
      const updatedHistory = [...reduxData.history, place];
      dispatch(saveHistory(updatedHistory));
    }
    setSelectedPlace(place);
  };

  useEffect(() => {
    console.log(data.length);
    
    if (Object.keys(data).length > 0) {
      const place = {
        latitude: data.latitude,
        longitude: data.longitude,
        name: data.name,
        address: data.formatted_address,
      };
      setSelectedPlace(place);
    } else {
      const place = {
        latitude: 37.7749,
        longitude: -122.4194,
        name: '',
        address: '',
      };
      setSelectedPlace(place);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          // marginTop: Platform.OS == 'ios' ? 60 : 12,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          position: 'absolute',
          top: Platform.OS == 'ios' ? 60 : 12,
          zIndex: 10,
        }}>
        <TouchableOpacity
          style={styles.iconWithShadow}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/back.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWithShadow}
          onPress={() => {
            // navigation.navigate('HistoryScreen');
            dispatch(showHistory(true));
          }}>
          <Image
            source={require('../assets/history.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search for a place"
          minLength={2}
          fetchDetails={true}
          onPress={(data, details = null) => {
            handlePlaceSelect(details);
          }}
          query={{
            key: '',
            language: 'en',
          }}
          onFocus={() => setIsAutocompleteFocused(true)}
          onBlur={() => setIsAutocompleteFocused(false)}
          styles={{
            textInputContainer: {
              width: '100%',
              zIndex: 10,
              position: 'relative',
              backgroundColor: 'white',
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
        style={{height: height}}
        region={{
          latitude: selectedPlace ? selectedPlace?.latitude : 37.7749,
          longitude: selectedPlace ? selectedPlace?.longitude : -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {selectedPlace && (
          <Marker
            coordinate={{
              latitude: selectedPlace ? selectedPlace.latitude : 37.7749,
              longitude: selectedPlace ? selectedPlace.longitude : -122.4194,
            }}
            title={selectedPlace.name}
            description={selectedPlace.address}
          />
        )}
      </MapView>
      <HistoryModal handlePlaceSelect={handlePlaceSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconWithShadow: {
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    borderRadius: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 10,
      },
    }),
    borderRadius: 24,
    backgroundColor: '#fff',
    padding: 9,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 140 : 80,
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
  focusText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 5,
  },
});

export default MapScreen;
