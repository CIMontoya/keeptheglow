import React, { Component } from 'react'
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native'
import Styles from './components/styles.js'
import { SwitchNavigator } from 'react-navigation'
import firebase from 'react-native-firebase'
import store from './store.js'
import { Provider } from 'react-redux'


//screens
import Loader from './components/screens/loader.js'
import Signup from './components/screens/signup.js'
import Login from './components/screens/login.js'
import User from './components/screens/profile_user.js'
import Settings from './components/screens/settings.js'
import Progress from './components/screens/progress.js'
import ReceiveFeedback from './components/screens/feedback_receive.js'
import DeleteAccount from './components/screens/popup_deleteAccount.js'
import RemovePartner from './components/screens/popup_removePartner.js'
import EditLoved from './components/screens/edit_loved.js'
import EditUnLoved from './components/screens/edit_unloved.js'
import EditAccount from './components/screens/auth_editAccount.js'
import Gives1 from './components/screens/popup_expandedItem.js'
import SendFeedback from './components/screens/feedback_send.js'
import Intro from './components/screens/intro.js'

console.disableYellowBox = true;

const RootStack = SwitchNavigator(
  {
    Loader,
    Signup,
    Login,
    User,
    Settings,
    Progress,
    ReceiveFeedback,
    DeleteAccount,
    RemovePartner,
    EditLoved,
    EditUnLoved,
    EditAccount,
    Gives1,
    SendFeedback,
    Intro
  },
  {
    initialRouteName: 'Loader'
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
