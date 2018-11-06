import React, {Component} from 'react'
import { CameraRoll, Text, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Button from 'react-native-button'
import ListItem1 from '../reusable/listItem1.js'
import ListItem2 from '../reusable/listItem2.js'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserData } from '../../actions/user.js'
import ViewPhotos from './view_photos.js'

class User extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      loved: [],
      unloved: [],
      showPhotoGallery: false,
      photoArray: []
    }
  }

  componentWillMount(){
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    this.props.setUserData(currentUser && currentUser.email)
  }

  // getPhotosFromGallery() {
  //   CameraRoll.getPhotos({ first: 100 })
  //     .then(res => {
  //       let photoArray = res.edges;
  //       this.setState({ showPhotoGallery: true, photoArray: photoArray })
  //     })
  // }

  render() {
    const { currentUser } = this.state
    const { navigate } = this.props.navigation
    const { user, userFeelings, partner, partnerFeelings } = this.props.user

// console.log("partnerFeelings from user", partnerFeelings)

    let lovedList
    let unlovedList


    if(userFeelings){
        lovedList = userFeelings.filter(feeling => feeling.is_loved === true)
    }
    if(userFeelings){
        unlovedList = userFeelings.filter(feeling => feeling.is_loved === false)
    }

    // if(this.state.showPhotoGallery){
    //   return (
    //     <ViewPhotos
    //       photoArray={this.state.photoArray}
    //     />
    //   )
    // }

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
            <View style={Styles.profileTop}>
              <View style={Styles.cornerLeft}>
                <TouchableOpacity
                  onPress={() => navigate('Partner')}>
                  <Image
                    style={Styles.headerIcons}
                    source={require('../../assets/icons/heart_white.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={Styles.cornerRight}>
                <TouchableOpacity
                  onPress={() => navigate('Settings')}>
                  <Image
                    style={Styles.headerIcons}
                    source={require('../../assets/icons/settings_white.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.profileBottom}>
              <View style={Styles.profileToggle}>
                <TouchableOpacity
                  // onPress={() => this.getPhotosFromGallery()}
                  >
                  <Image
                    style={Styles.profilePic}
                    source={require('../../assets/icons/avatar_circle_purple.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={Styles.profileBody}>
          <View style={Styles.spacerMedium}></View>
          <View style={Styles.list}>
          {lovedList ?
            <View style={Styles.listHalf1}>
              <Image
                style={Styles.icons}
                source={require('../../assets/icons/plus_bare.png')}
              />
              <Text>GIVES</Text>
              <View style={Styles.spacerLarge}></View>
              {lovedList.map((feeling, index) =>
                <View>
                  <ListItem1
                    key={feeling.id}
                    text={feeling.name}
                    description={feeling.description}
                    press={navigate}
                    screen={`Gives${index}`}
                  />
                  <View style={Styles.spacerSmall}></View>
                </View>
              )}
            </View> : ""
          }
          {unlovedList ?
            <View style={Styles.listHalf2}>
              <Image
                style={Styles.icons}
                source={require('../../assets/icons/minus_bare.png')}
              />
              <Text>TAKES</Text>
              <View style={Styles.spacerLarge}></View>
              {unlovedList.map((feeling, index) =>
                <View>
                  <ListItem2
                    key={feeling.id}
                    text={feeling.name}
                    description={feeling.description}
                    press={navigate}
                    screen={`Takes${index}`}
                  />
                  <View style={Styles.spacerSmall}></View>
                </View>
              )}
            </View> : ""
          }
        </View>
        </View>
        <BottomNav
          nav={navigate}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData,
    scores: state.user.scores
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User)
