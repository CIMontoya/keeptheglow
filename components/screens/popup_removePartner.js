import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'

class RemovePartner extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: true
    }
  }

  static navigationOptions = {
   header: null
  }

  onSubmit = async () => {
    // replace id with data from the store
    let id = 2
    const deleteCouple = await fetch(`https://keeptheglow.herokuapp.com/api/couples/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     }
   }).then(response => {
     console.log("couple to be deleted:", response)
     navigate('User')
   })

 }

  render() {
    return (
      <Popup
        header='Remove Partner'
        content='Are you sure you want to remove your partner? You will lose access to all feedback they have provided you, as well as their lists. They will also lose your feedback and lists.'
        buttonText="Remove My Partner"
      />
    )
  }
}

export default RemovePartner
