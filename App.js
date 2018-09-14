import React, { Component } from 'react'
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native'
import Styles from './components/styles.js'
import { SwitchNavigator } from 'react-navigation'
import firebase from 'react-native-firebase'
import store from './store.js'
import { Provider } from 'react-redux'


//screens
import Loader from './components/screens/loader.js'
import Signup from './components/screens/auth_signup.js'
import Login from './components/screens/auth_login.js'
import User from './components/screens/profile_user.js'
import Settings from './components/screens/settings.js'
import Progress from './components/screens/progress.js'

console.disableYellowBox = true;

const RootStack = SwitchNavigator(
  {
    Loader,
    Signup,
    Login,
    User,
    Settings,
    Progress
  },
  {
    initialRouteName: 'Progress'
  }
)

export default class App extends Component {

  render() {
    return (
			<Provider store={store}>
				<RootStack />
		  </Provider>
		)
  }
}
