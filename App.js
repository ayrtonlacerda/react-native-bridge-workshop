/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const [count, setState] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador </Text>
      <View style={styles.count_container}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c4e1',
  },
  count_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c49f',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 15,
    margin: 20,
  },
  title: {
    fontSize: 35,
    color: '#fff',
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
