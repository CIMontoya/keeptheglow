import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import ListItem from '../reusable/listItem.js'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import Setting from '../reusable/setting.js'
import firebase from 'react-native-firebase'

class Settings extends Component {

  static navigationOptions = {
   header: null
 }

  handleSignout = () => {
    firebase
    .auth().signOut().then(function(){
      console.log('Signed Out')
    }, function(error){
      console.error('Sign Out Error', error)
    })
  }

  render() {

    const { navigate } = this.props.navigation

    return (
      <View style={Styles.container}>
        <View style={Styles.header}>

        </View>
        <View style={Styles.body}>
          <View style={Styles.user}>
            <View style={Styles.userPic}>
              <Image
                style={Styles.profilePic}
                source={require('../../assets/img/partner1.jpg')}/>
              <View style={Styles.editPic}></View>
              <View style={Styles.spacerMedium}></View>
              <Text>Replace with name from the store</Text>
            </View>
            <View style={Styles.hr}></View>
            <View style={Styles.spacerLarge}></View>
            <TouchableOpacity
              style={Styles.setting}
            >
              <Setting text="Loved List"/>
              <Image
                style={Styles.settingArrow}
                source={require('../../assets/img/smRightArrow.png')}
              />
            </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                style={Styles.setting}
              >
                <Setting text="Unloved List"/>
                <Image
                  style={Styles.settingArrow}
                  source={require('../../assets/img/smRightArrow.png')}
                />
              </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                  style={Styles.setting}
              >
                <Setting text="Username, Email, Password"/>
                <Image
                  style={Styles.settingArrow}
                  source={require('../../assets/img/smRightArrow.png')}
                />
              </TouchableOpacity>
              <View style={Styles.spacerLarge}></View>
              <View style={Styles.hr}></View>
              <View style={Styles.spacerLarge}></View>
              <TouchableOpacity
                style={Styles.setting}
              >
                <Setting text="Remove Partner"/>
              </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                style={Styles.setting}
              >
                <Setting text="Delete Account"/>
              </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                style={Styles.setting}
                onPress={this.handleSignout}
              >
                <Setting text="Sign Out"/>
              </TouchableOpacity>
            </View>
          </View>
        <BottomNav
          nav={navigate}/>
      </View>
    )
  }
}

export default Settings
