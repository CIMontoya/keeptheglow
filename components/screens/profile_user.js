import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import ListItem from '../reusable/listItem.js'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import firebase from 'react-native-firebase'

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

  async componentWillMount() {
    //replace with id from the store
    let id = 1
    const response = await fetch(`https://keeptheglow.herokuapp.com/api/users/${id}/feelings`)
    const responseJSON = await response.json()
    const feelings = responseJSON.data

    let lovedList = feelings.slice(0, 3)
    let unlovedList = feelings.slice(3, 6)

    console.log(lovedList)

    let loved_items = []
    let unloved_items = []

    lovedList.map((feeling) => {
      let obj = {
        id: feeling.id,
        name: feeling.name,
        description: feeling.description
      }
      loved_items.push(obj)
    })

    unlovedList.map((feeling) => {
      let obj = {
        id: feeling.id,
        name: feeling.name,
        description: feeling.description
      }
      unloved_items.push(obj)
    })

    this.setState({loved: loved_items, unloved: unloved_items})
  }

  componentDidMount(){
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  render() {

    const { currentUser } = this.state
    const { navigate } = this.props.navigation

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

export default User
