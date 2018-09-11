import React, {Component} from 'react'
import { Text, View } from 'react-native'
import ButtonElement from './button.js'
import Styles from '../styles.js'

class ListItem extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <ButtonElement/>
    )
  }
}

export default ListItem
