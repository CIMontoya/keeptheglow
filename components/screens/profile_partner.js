import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import ListItem from '../reusable/listItem.js'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'

class Partner extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      loved: [],
      unloved: []
    }
  }

  async componentWillMount() {

    //replace with id data from the store
    let id = 2

    const response = await fetch(`https://keeptheglow.herokuapp.com/api/users/${2}/feelings`)
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

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <View style={Styles.listHalf1}>
            <Text style={Styles.h1}>Brandon's List</Text>
          </View>
        </View>
        <View style={Styles.body}>
          <View style={Styles.profileToggle}>
            <TouchableOpacity>
            <Image
              style={Styles.profilePic2}
              source={require('../../assets/img/partner1.jpg')}
            />
            </TouchableOpacity>
              <Image
                style={Styles.profilePic}
                source={require('../../assets/img/partner2.jpeg')}
              />
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
        <BottomNav/>
      </View>
    )
  }
}

export default Partner
