import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryScreen = ({ onSelectPlace }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const storedHistory = await AsyncStorage.getItem('searchHistory');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    };
    fetchHistory();
  }, []);

  return (
    <FlatList
      data={history}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.historyItem}
          onPress={() => onSelectPlace(item)}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default HistoryScreen;
