import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import ButtonElement from '../reusable/button.js'
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
    const pic = require('../../assets/profile_header.png')
    return (
      <View style={Styles.container}>
        <ImageBackground
          source={pic}
          style={{
            width:380,
            height:190,
          }}
        >
          <View style={Styles.profileHeader}>
            <View style={Styles.avatarSettings}>
              <TouchableOpacity
                onPress={() => this.getPhotosFromGallery()}>
                <Image
                  style={Styles.profilePic}
                  source={require('../../assets/icons/avatar_circle_purple.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={Styles.body}>
          <View style={Styles.user}>
<<<<<<< HEAD
            <View style={Styles.userPic}>
              <Image
                style={Styles.profilePic}
                source={require('../../assets/icons/avatar.png')}
              />
              <View style={Styles.editPic}></View>
              <View style={Styles.spacerMedium }></View>
              <Text style={Styles.setting}>Aimee Roxanne</Text>
            </View>
            <View style={Styles.hr}></View>
=======
            <View style={Styles.spacerLarge}></View>
>>>>>>> afe1ba0c3dd3c8a41feeded99a6828ce5337dac8
            <View style={Styles.spacerLarge}></View>
            <TouchableOpacity
              style={Styles.setting}
              onPress={()=>navigate('EditLoved')}>
              <Setting text="Gives List"/>
              <Image
                style={Styles.settingArrow}
                source={require('../../assets/icons/smRightArrow.png')}
              />
            </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                style={Styles.setting}
                onPress={()=>navigate('EditUnLoved')}>
                <Setting text="Takes List"/>
                <Image
                  style={Styles.settingArrow}
                  source={require('../../assets/icons/smRightArrow.png')}
                />
              </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                  style={Styles.setting}
                  onPress={()=>navigate('EditAccount')}>
                <Setting text="Username, Email, Password"/>
                <Image
                  style={Styles.settingArrow}
                  source={require('../../assets/icons/smRightArrow.png')}
                />
              </TouchableOpacity>
              <View style={Styles.spacerLarge}></View>
              <View style={Styles.hr}></View>
              <View style={Styles.spacerLarge}></View>
              <TouchableOpacity
                style={Styles.setting}
                onPress={()=>navigate('RemovePartner')}>
                <Setting text="Remove Partner"/>
              </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                style={Styles.setting}
                onPress={()=>navigate('DeleteAccount')}>
                <Setting text="Delete Account"/>
              </TouchableOpacity>
              <View style={Styles.spacerMedium}></View>
              <TouchableOpacity
                style={Styles.setting}
                onPress={this.handleSignout}>
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
