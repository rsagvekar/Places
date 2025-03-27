import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

import {theme as AppTheme} from '../constants/Theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleVisited, updatePlaces} from '../redux/Actions/CommonActions';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;

  const [currentPlace, setCurrentPlace] = useState(item);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.CommonReducer);

  const handleThumbnailClick = index => {
    setSelectedImageIndex(index);
  };

  const updateVisit = () => {
    const updatedPlace = { ...currentPlace, isVisited: !currentPlace.isVisited };
    setCurrentPlace(updatedPlace);
  
    const updatedData = reduxData.data.map(place =>
      place.id === updatedPlace.id ? updatedPlace : place
    );
    
    dispatch(updatePlaces(updatedData));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{uri: currentPlace?.images[selectedImageIndex]}}
          style={{height: 400, width: width}}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={{
              width: width,
              height: 400,
              position: 'absolute',
            }}>
            <View
              style={{
                width: width,
                marginTop: Platform.OS == 'ios' ? 60 : 12,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableOpacity
                style={{
                  height: 48,
                  width: 48,
                  borderRadius: 24,
                  backgroundColor: AppTheme.light.white,
                }}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  source={require('../assets/back.png')}
                  style={{height: 48, width: 48}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => updateVisit()}
                style={styles.iconWithShadow}>
                <Image
                  source={
                    currentPlace?.isVisited
                      ? require('../assets/explore.png')
                      : require('../assets/unexplore.png')
                  }
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: width,
                position: 'absolute',
                bottom: 20,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: '700',
                    color: AppTheme.light.white,
                  }}
                  numberOfLines={1}>
                  {currentPlace?.name}
                </Text>
              </View>
              <View>
                {[1, 2, 3].map(index => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleThumbnailClick(index)}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor:
                        selectedImageIndex === index
                          ? AppTheme.light.primary
                          : AppTheme.light.white,
                      marginBottom: 8,
                      backgroundColor: AppTheme.light.white,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={{uri: currentPlace?.images[index]}}
                      style={{height: 54, width: 54}}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View
          style={{
            marginTop: 24,
            marginHorizontal: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 12,
                marginRight: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: AppTheme.light.white,
              }}>
              <Image
                source={require('../assets/built.png')}
                style={{height: 36, width: 36}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  color: AppTheme.light.black,
                }}>
                Built
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: AppTheme.light.TextColor,
                }}>
                {currentPlace?.built}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 12,
                marginRight: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: AppTheme.light.white,
              }}>
              <Image
                source={require('../assets/star.png')}
                style={{height: 36, width: 36}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  color: AppTheme.light.black,
                }}>
                Ratings
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: AppTheme.light.TextColor,
                }}>
                {currentPlace?.ratings}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{marginTop: 24, marginHorizontal: 20}}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '700',
                color: AppTheme.light.black,
              }}>
              Description
            </Text>
            <Text
              style={{
                marginVertical: 8,
                fontSize: 18,
                fontWeight: '600',
                color: AppTheme.light.TextColor,
              }}>
              {currentPlace?.briefDescription}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: AppTheme.light.TextColor,
              }}>
              {currentPlace?.description}
            </Text>
          </View>
        </View>
        <Image
          source={
            currentPlace?.isVisited
              ? require('../assets/explored.png')
              : require('../assets/toExplore.png')
          }
          style={{height: 150, width: 150, alignSelf: 'center'}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.light.RightMessageText,
  },
  iconWithShadow: {
    height: 48,
    width: 48,
    backgroundColor: AppTheme.light.white,
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
    backgroundColor: AppTheme.light.white,
    padding: 9,
  },
});

export default DetailScreen;
