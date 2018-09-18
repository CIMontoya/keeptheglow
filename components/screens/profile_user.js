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

    const pic = require('../../assets/gradient_dark.png')
    return (
      <ImageBackground
        source={pic}
        style={{
          width:380,
          height:670,
        }}
      >
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.profileToggle}>
          <TouchableHighlight
            onPress={() => this.getPhotosFromGallery()}>
            <Image
              style={Styles.profilePic}
              source={require('../../assets/icons/avatar_circle.png')}
            />
          </TouchableHighlight>>
            <View style={Styles.spacerMedium}></View>
            <Text style={Styles.link}>View Melissa's List</Text>          </View>
          <View style={Styles.spacerSmall}></View>
          <View style={Styles.card}>
          <View style={Styles.spacerLarge}></View>
          <View style={Styles.list}>
          {lovedList ?
            <View style={Styles.listHalf1}>
              <Text>Gives</Text>
              {lovedList.map(feeling =>
                <View>
                  <ListItem
                    key={feeling.id}
                    text={feeling.name}
                    description={feeling.description}
                    press={navigate}
                    screen="Gives1"
                  />
                  <View style={Styles.spacerSmall}></View>
                </View>
              )}
            </View> : ""
          }
          {unlovedList ?
            <View style={Styles.listHalf2}>
              <Text>Takes</Text>
              {unlovedList.map(feeling =>
                <View>
                  <ListItem
                    key={feeling.id}
                    text={feeling.name}
                    description={feeling.description}
                  />
                  <View style={Styles.spacerSmall}></View>
                </View>
              )}
            </View> : ""
          }
          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
              <Button
                style={Styles.buttonText}
                containerStyle={Styles.buttonBox}
                onPress={() => navigate('SendFeedback')}
              >Send Feedback
              </Button>
            </View>
        </View>
        </View>
        <BottomNav
          nav={navigate}/>
      </View>
    </ImageBackground>
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
