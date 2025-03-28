import React from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {showHistory} from '../redux/Actions/CommonActions';
import {theme as AppTheme} from '../constants/Theme';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HistoryModal = ({handlePlaceSelect}) => {
  const dispatch = useDispatch();
  const reduxData = useSelector(state => state.CommonReducer);
  const navigation = useNavigation();

  const toggleModal = () => {
    dispatch(showHistory(false));
  };

  const data = [
    {
      latitude: 27.1751448,
      longitude: 78.0421422,
      name: 'Taj Mahal',
      address: 'Agra, Uttar Pradesh',
    },
    {
      latitude: 28.5244946,
      longitude: 77.18551769999999,
      name: 'Qutub Minar',
      address: 'Delhi',
    },
    {
      latitude: 15.3350132,
      longitude: 76.46002399999999,
      name: 'Hampi',
      address: 'Karnataka',
    },
    {
      latitude: 26.9124336,
      longitude: 75.7872709,
      name: 'Jaipur City',
      address: 'Rajasthan',
    },
    {
      latitude: 28.6561592,
      longitude: 77.2410203,
      name: 'Red Fort',
      address: 'Delhi',
    },
    {
      latitude: 12.305163,
      longitude: 76.65517489999999,
      name: 'Mysore Palace',
      address: 'Mysuru, Karnataka',
    },
    {
      latitude: 18.9219841,
      longitude: 72.8346543,
      name: 'Gateway of India',
      address: 'Mumbai, Maharashtra',
    },
    {
      latitude: 19.8875953,
      longitude: 86.0945364,
      name: 'Konark Sun Temple',
      address: 'Odisha',
    },
    {
      latitude: 24.8530687,
      longitude: 79.9217353,
      name: 'Khajuraho Temples',
      address: 'Madhya Pradesh',
    },
    {
      latitude: 20.5513286,
      longitude: 75.7069356,
      name: 'Ajanta Caves',
      address: 'Maharashtra',
    },
    {
      latitude: 21.8842354,
      longitude: 88.88537649999999,
      name: 'Sundarbans National Park',
      address: 'West Bengal',
    },
    {
      latitude: 29.5521551,
      longitude: 78.88321069999999,
      name: 'Jim Corbett National Park',
      address: 'Uttarakhand',
    },
    {
      latitude: 23.6578301,
      longitude: 80.5451942,
      name: 'Bandhavgarh National Park',
      address: 'Madhya Pradesh',
    },
  ];

  return (
    <Modal
      isVisible={reduxData.showHistoryModal}
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.bar} />
        <View style={styles.header}>
          <Image
            source={require('../assets/history.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>Recent</Text>
        </View>
        <View>
          {reduxData.history.length > 0 ? (
            <FlatList
              data={reduxData.history}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.historyItem}
                  onPress={() => {
                    handlePlaceSelect(item);
                    toggleModal();
                  }}>
                  <Text style={{flex: 1, fontSize: 16}}>{item.name}</Text>
                  <Image
                    source={require('../assets/history.png')}
                    style={{height: 24, width: 24}}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <View
              style={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/history.png')}
                style={{height: 24, width: 24}}
              />
              <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 8}}>
                No recent history
              </Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    height: screenHeight * 0.8,
    width: screenWidth,
    backgroundColor: AppTheme.light.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    margin: 0,
    bottom: 0,
  },
  bar: {
    height: 8,
    width: 100,
    borderRadius: 4,
    backgroundColor: AppTheme.light.searchContainerBorder,
    alignSelf: 'center',
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
  },
});

export default HistoryModal;
