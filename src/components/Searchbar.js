import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = ({ onSelectPlace }) => {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        minLength={2}
        fetchDetails={true}
        onPress={(data, details = null) => {
            console.log('details', details);
            
          onSelectPlace(details);
        }}
        query={{
          key: 'AIzaSyBg2UIaZE_0hhQAM6cib4XabNi73Y3ReRk',
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            width: '100%',
          },
          textInput: {
            height: 40,
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default SearchBar;
