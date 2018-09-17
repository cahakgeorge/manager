import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'

import firebase from '@firebase/app';

class App extends Component{

    //https://stackoverflow.com/questions/50555275/react-native-objects-are-not-valid-as-a-react-child-found-object-with-keys
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyC02N8lLsQ7C9pnnyz5X08xEHcGPn6CCB8",
            authDomain: "manager-329be.firebaseapp.com",
            databaseURL: "https://manager-329be.firebaseio.com",
            projectId: "manager-329be",
            storageBucket: "manager-329be.appspot.com",
            messagingSenderId: "36767800340"
          });

          /* firebase.auth().onAuthStateChanged((user) => {
            if(user) this.setState({ loggedIn: true });
            else this.setState({ loggedIn: false });
          }); */
    } 

    render(){
        return (
            <Provider store={createStore()}>
                <View>
                    <Text> Hello </Text>
                </View>
            </Provider>
        );
    }
}

export default App;