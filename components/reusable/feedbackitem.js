import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles.js'

class FeedbackItem extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
        <View>
          <View style={Styles.spacerLarge}></View>
          <Text style={Styles.h3}>{this.props.name}</Text>
          <View style={Styles.spacerSmall}></View>
          <Text>{this.props.feedback}</Text>
        </View>
    )
  }
}

export default FeedbackItem
