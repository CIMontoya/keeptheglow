import React, { Component} from 'react'
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native'
import Styles from './components/styles.js'
import { SwitchNavigator } from 'react-navigation'
import firebase from 'react-native-firebase'

//screens
import Loader from './components/screens/loader.js'
import Signup from './components/screens/auth_signup.js'
import Login from './components/screens/auth_login.js'
import User from './components/screens/profile_user.js'
import Settings from './components/screens/settings.js'

const App = SwitchNavigator(
  {
    Loader,
    Signup,
    Login,
    User,
    Settings
  },
  {
    initialRouteName: 'Signup'
  }
)

export default App
