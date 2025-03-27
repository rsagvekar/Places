import React, {Component, useEffect, useState} from 'react';
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

import {theme as AppTheme} from '../constants/Theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// create a component
const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.CommonReducer);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedType, setSelectedType] = useState(reduxData.data[0].type);
  const [travelPlaces, setTravelPlaces] = useState(reduxData.data);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedIndex(index);
          setSelectedType(item.type);
        }}
        style={{minWidth: 200, height: 100, marginRight: 12, marginTop: 20}}>
        <LinearGradient
          colors={
            selectedIndex == index
              ? ['#fc6b3c', '#fe8760', '#fcaa8e']
              : ['#fff', '#fff']
          }
          style={{
            height: 100,
            minWidth: 200,
            borderRadius: 12,
            paddingLeft: 12,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 48,
              width: 48,
              borderRadius: 12,
              marginRight: 8,
              backgroundColor:
                selectedIndex == index ? AppTheme.light.white : AppTheme.light.messageSearchContainer,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.icon}
              style={{height: 36, width: 36}}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color:
                selectedIndex == index
                  ? AppTheme.light.white
                  : AppTheme.light.black,
            }}>
            {item.type}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderPlaces = ({item, index}) => {
    if (selectedType == item.type) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailScreen', {item: item});
          }}
          style={{
            marginRight: 12,
            marginTop: 20,
            borderRadius: 12,
            padding: 20,
            backgroundColor: AppTheme.light.white,
          }}>
          <Image
            source={{uri: item.images[0]}}
            style={{borderRadius: 12, height: 160, width: 280}}
          />
          <Text
            style={{
              marginTop: 12,
              fontSize: 18,
              fontWeight: '700',
              color: AppTheme.light.TextColor,
            }}>
            {item.name}
          </Text>
          <View style={{marginTop: 4, flexDirection: 'row'}}>
            <Image
              source={require('../assets/location.png')}
              style={{
                height: 20,
                width: 20,
              }}
            />
            <Text
              style={{
                marginLeft: 4,
                fontSize: 14,
                fontWeight: '500',
                color: AppTheme.light.TextColor,
              }}>
              {item.location}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTravelPlaces(reduxData.data);
    });

    return () => {
      unsubscribe;
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.iconWithShadow}>
          <Image
            source={require('../assets/menu.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWithShadow}>
          <Image
            source={require('../assets/notification.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '600',
              color: AppTheme.light.searchPlaceHolderText,
            }}>
            Explore the
          </Text>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '900',
              color: AppTheme.light.black,
            }}>
            Beautiful world!
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            height: 60,
            borderRadius: 12,
            width: '80%',
            marginTop: 24,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              // marginLeft: 20,
              borderRadius: 12,
              backgroundColor: AppTheme.light.white,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              paddingHorizontal: 18,
            }}>
            <Image
              source={require('../assets/search.png')}
              style={{height: 24, width: 24, alignSelf: 'center'}}
            />
            <TextInput
              style={{
                flex: 1,
                paddingLeft: 12,
                height: 60,
              }}
            />
          </View>

          <LinearGradient
            colors={['#ff4408', '#fc551f', '#fc6636']}
            style={{
              // height: 60,
              marginLeft: 12,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
            onPress={() => {navigation.navigate('MapScreen')}}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: 12,
              }}>
              <Image
                source={require('../assets/filter.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={{marginLeft: 20, marginTop: 20}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '700',
              color: AppTheme.light.black,
            }}>
            Categories
          </Text>
          <FlatList
            data={reduxData.categories}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 20, marginBottom: 60}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 20,
            }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '700',
                color: AppTheme.light.TextColor,
              }}>
              Travel Places
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ExploreScreen');
              }}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 4,
                borderRadius: 24,
                backgroundColor: AppTheme.light.bottomTabBg,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: AppTheme.light.TextColor,
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={reduxData.data}
            extraData={reduxData.data}
            renderItem={renderPlaces}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          const randomIndex = Math.floor(Math.random() * reduxData.data.length);
          const randomPlace = reduxData.data[randomIndex];
          navigation.navigate('DetailScreen', {item: randomPlace});
        }}
        style={{
          backgroundColor: '#fc6636',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 20,
          width: '80%',
          height: 60,
          borderRadius: 12,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: AppTheme.light.white,
          }}>
          Suggest Random PLace
        </Text>
      </TouchableOpacity>
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

//make this component available to the app
export default Dashboard;
