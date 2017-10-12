import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCRxn6lT4U-PtNLdoPO-v4qlLsXVqmhE6U",
      authDomain: "authentication-9e16e.firebaseapp.com",
      databaseURL: "https://authentication-9e16e.firebaseio.com",
      projectId: "authentication-9e16e",
      storageBucket: "authentication-9e16e.appspot.com",
      messagingSenderId: "914877819485"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>);

      case false:
          return <LoginForm />;

      default:
          return ( 
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }
  
  render() {
    return (
      <View>
        <Header headerText ="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    paddingTop: 40
  }
}

export default App;
