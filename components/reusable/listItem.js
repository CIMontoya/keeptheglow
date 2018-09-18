import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Button from 'react-native-button'
import Styles from '../styles.js'

class ListItem extends Component {

  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <TouchableOpacity
        onPress={() => this.props.press(this.props.screen)}>
        <View
          style={Styles.card}>
          <Text
            style={Styles.listItemText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ListItem
