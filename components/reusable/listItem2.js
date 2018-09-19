import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Button from 'react-native-button'
import Styles from '../styles.js'

class ListItem2 extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.press(this.props.screen)}>
        <View
          style={Styles.card}>
          <Text
            style={Styles.listItemText2}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ListItem2
