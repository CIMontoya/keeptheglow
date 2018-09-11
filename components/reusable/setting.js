import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Button from 'react-native-button'
import Styles from '../styles.js'

class Setting extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <Text style={Styles.settingText}>{this.props.text}</Text>
    )
  }
}

export default Setting
