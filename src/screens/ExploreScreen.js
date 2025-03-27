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

import {theme as AppTheme} from '../constants/Theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updatePlaces} from '../redux/Actions/CommonActions';

const width = Dimensions.get('screen').width;

const ExploreScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.CommonReducer);
  const [exploreAll, setExploreAll] = useState(reduxData.data);
  const renderPlaces = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailScreen', {item: item});
        }}
        style={{
          marginTop: 20,
          borderRadius: 12,
          padding: 20,
          backgroundColor: AppTheme.light.white,
        }}>
        <Image
          source={{uri: item.images[0]}}
          style={{borderRadius: 12, height: 160, width: '100%'}}
        />
        <TouchableOpacity
          onPress={() => updateVisit(item)}
          style={{
            height: 30,
            width: 30,
            position: 'absolute',
            right: 30,
            top: 30,
            borderRadius: 8,
            backgroundColor: AppTheme.light.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={
              item.isVisited
                ? require('../assets/explore.png')
                : require('../assets/unexplore.png')
            }
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
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
  };

  const updateVisit = dex => {
    const data = reduxData.data;
    const updatedData = data.map(item =>
      item.id === dex.id ? {...item, isVisited: !dex.isVisited} : item,
    );
    setExploreAll(updatedData);
    dispatch(updatePlaces(updatedData));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width,
          marginTop: Platform.OS == 'ios' ? 60 : 12,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          //   justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/back.png')}
            style={{height: 36, width: 36}}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 12,
            fontSize: 22,
            fontWeight: '700',
            color: AppTheme.light.TextColor,
          }}>
          Explore All
        </Text>
      </View>
      <FlatList
        contentContainerStyle={{marginHorizontal: 20}}
        data={exploreAll}
        renderItem={renderPlaces}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.light.RightMessageText,
  },
});

export default ExploreScreen;
