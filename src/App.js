import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common'

class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCRxn6lT4U-PtNLdoPO-v4qlLsXVqmhE6U",
      authDomain: "authentication-9e16e.firebaseapp.com",
      databaseURL: "https://authentication-9e16e.firebaseio.com",
      projectId: "authentication-9e16e",
      storageBucket: "authentication-9e16e.appspot.com",
      messagingSenderId: "914877819485"
    })
  }
  
  render() {
    return (
      <View>
        <Header headerText ="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
