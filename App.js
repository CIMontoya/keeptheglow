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
import Partner from './components/screens/profile_partner.js'
import Settings from './components/screens/settings.js'
// import ProgressGives from './components/screens/progress_gives.js'
// import ProgressTakes from './components/screens/progress_takes.js'
import ReceiveFeedback from './components/screens/feedback_receive.js'
import DeleteAccount from './components/screens/popup_deleteAccount.js'
import RemovePartner from './components/screens/popup_removePartner.js'
import EditLoved from './components/screens/edit_loved.js'
import EditUnLoved from './components/screens/edit_unloved.js'
import EditAccount from './components/screens/auth_editAccount.js'

import Gives0 from './components/screens/gives0.js'
import Gives1 from './components/screens/gives1.js'
import Gives2 from './components/screens/gives2.js'
import Takes0 from './components/screens/takes0.js'
import Takes1 from './components/screens/takes1.js'
import Takes2 from './components/screens/takes2.js'

import PartnerGives0 from './components/screens/partner_gives0.js'
import PartnerGives1 from './components/screens/partner_gives1.js'
import PartnerGives2 from './components/screens/partner_gives2.js'
import PartnerTakes0 from './components/screens/partner_takes0.js'
import PartnerTakes1 from './components/screens/partner_takes1.js'
import PartnerTakes2 from './components/screens/partner_takes2.js'



import FeedbackGives0 from './components/screens/feedback_gives0.js'
import FeedbackGives1 from './components/screens/feedback_gives1.js'
import FeedbackGives2 from './components/screens/feedback_gives2.js'

import CreateList0 from './components/screens/create_list0.js'
import CreateList1 from './components/screens/create_list1.js'

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
    // ProgressGives,
    // ProgressTakes,
    Partner,
    ReceiveFeedback,
    DeleteAccount,
    RemovePartner,
    // EditLoved,
    // EditUnLoved,
    // EditAccount,

    Gives0,
    Gives1,
    Gives2,
    Takes0,
    Takes1,
    Takes2,

    PartnerGives0,
    PartnerGives1,
    PartnerGives2,
    PartnerTakes0,
    PartnerTakes1,
    PartnerTakes2,

    FeedbackGives0,
    FeedbackGives1,
    FeedbackGives2,
    Intro,
    CreateList0,
    CreateList1
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
