import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container} />
      </Provider>

    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
    }
  });

  export default App;
