//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {theme as AppTheme} from '../constants/Theme';
import {useNavigation} from '@react-navigation/native';

// create a component
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg',
      }}
      style={{
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={{
          width: width,
          height: height,
          alignItems: 'center',
          justifyContent: 'center',
          // borderRadius: 10,
          position: 'absolute',
        }}>
        <Text
          style={{
            fontSize: 48,
            fontWeight: '400',
            color: AppTheme.light.white,
          }}>
          Lets's make
        </Text>
        <Text
          style={{
            fontSize: 48,
            fontWeight: '800',
            color: AppTheme.light.white,
          }}>
          your dream
        </Text>
        <Text
          style={{
            fontSize: 48,
            fontWeight: '800',
            color: AppTheme.light.white,
          }}>
          vacation.
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('Dashboard');
          }}
          style={{
            position: 'absolute',
            bottom: 80,
            borderRadius: 12,
            width: '80%',
            alignItems: 'center',
            backgroundColor: 'red',
            // padding: 12,
          }}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={{
              padding: 12,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: AppTheme.light.white,
              }}>
              Get started
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SplashScreen;
