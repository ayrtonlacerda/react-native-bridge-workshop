import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Bridge from './utils';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const App = () => {
  const [count, setState] = useState(0);
  const [count2, setState2] = useState(0);

  useEffect(() => {
    Bridge.start();
  }, []);

  useEffect(() => {
    Bridge.statusChange(({status}) => {
      console.log({status});
      setState(status);
    });
  }, [count]);
  /*
  const time = () => {
    setState(count + 1);
    Bridge.statusChange(({status}) => {
      console.log({status});
      setState2(status);
    });

    const rest = count % 3;
    if (rest === 2) {
      Bridge.show(rest, count2, 2);
    }
  };

  useInterval(() => time(), 1000);
 */
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
