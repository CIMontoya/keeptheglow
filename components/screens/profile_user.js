import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import ListItem from '../reusable/listItem.js'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserData } from '../../actions/user.js'


class User extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      loved: [],
      unloved: []
    }
  }

  render() {
    const { currentUser } = this.state
    const { navigate } = this.props.navigation
    // let { userFeelings } = this.props.navigation
    console.log("props", this.props.user.userFeelings)
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <View style={Styles.listHalf1}>
            <Text style={Styles.h1}>Hi {currentUser && currentUser.email}!</Text>
          </View>
        </View>
        <View style={Styles.body}>
          <View style={Styles.profileToggle}>
            <Image
              style={Styles.profilePic}
              source={require('../../assets/img/partner1.jpg')}
            />
            <TouchableOpacity>
              <Image
                style={Styles.profilePic2}
                source={require('../../assets/img/partner2.jpeg')}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.hr}></View>
          <View style={Styles.spacerMedium}></View>
          <View style={Styles.posNeg}>
            <Image
              style={Styles.plusMinus}
              source={require('../../assets/img/plus.png')}
            />
            <View style={Styles.spacerSlim}></View>
            <Image
              style={Styles.plusMinus}
              source={require('../../assets/img/minus.png')}
            />
          </View>
          <View style={Styles.spacerLarge}></View>
          <View style={Styles.list}>
            <View style={Styles.listHalf1}>
              {this.state.loved.map(feeling =>
                <View>
                  <ListItem
                    key={feeling.id}
                    text={feeling.name}
                    description={feeling.description}
                  />
                  <View style={Styles.spacerSmall}></View>
                </View>
              )}
            </View>
            <View style={Styles.listHalf2}>
              {this.state.unloved.map(feeling =>
                <View>
                  <ListItem
                    key={feeling.id}
                    text={feeling.name}
                    description={feeling.description}
                  />
                  <View style={Styles.spacerSmall}></View>
                </View>
              )}
            </View>
          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
              <ButtonElement/>
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
    user: state.user.userData
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User)
