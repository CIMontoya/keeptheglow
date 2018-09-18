import React, {Component} from 'react'
import { CameraRoll, Text, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Button from 'react-native-button'
import ListItem from '../reusable/listItem.js'
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

  getPhotosFromGallery() {
    CameraRoll.getPhotos({ first: 100 })
      .then(res => {
        let photoArray = res.edges;
        this.setState({ showPhotoGallery: true, photoArray: photoArray })
      })
  }

  render() {
    const { currentUser } = this.state
    const { navigate } = this.props.navigation
    const { user, userFeelings, partner, partnerFeelings } = this.props.user

    let lovedList
    let unlovedList


    if(userFeelings){
        lovedList = userFeelings.filter(feeling => feeling.is_loved === true)
    }
    if(userFeelings){
        unlovedList = userFeelings.filter(feeling => feeling.is_loved === false)
    }



    if(this.state.showPhotoGallery){
      return (
        <ViewPhotos
          photoArray={this.state.photoArray}
        />
      )
    }

    const pic = require('../../assets/profile_header.png')
    return (
      <View style={Styles.container}>
        <View style={Styles.profileHeader}>
          <ImageBackground
            source={pic}
            style={{
              width:380,
              height:300,
            }}
          >
            <View>
              <Image
                style={Styles.headerIcons}
                source={require('../../assets/icons/heart.png')}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={Styles.body}>
          <View style={Styles.profileToggle}>
          <TouchableHighlight
            onPress={() => this.getPhotosFromGallery()}>
            <Image
              style={Styles.profilePic}
              source={require('../../assets/icons/avatar_circle_whitebg.png')}
            />
          </TouchableHighlight>
          <TouchableOpacity
            onPress={()=>navigate('Settings')}>
          <Image
            style={Styles.headerIcons}
            source={require('../../assets/icons/settings.png')}
          />
        </TouchableOpacity>
            {/* <View style={Styles.spacerSmall}></View> */}
          </View>
          <View style={Styles.list}>
          {lovedList ?
            <View style={Styles.listHalf1}>
              <Text>Gives</Text>
              {lovedList.map((feeling, index) =>
                <View>
                  <ListItem
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
              <Text>Takes</Text>
              {unlovedList.map((feeling, index) =>
                <View>
                  <ListItem
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
