import React, {Component} from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'

class EditDescription extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: 'addPartner'
    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    return (
      <Popup
        header='Edit Feeling Description'
        content='This is your chance to explain why this particular thing is important to you.'
        buttonText="I'm sure."
        form={true}
      />
    )
  }
}

export default EditDescription
