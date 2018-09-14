import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'

class DeleteAccount extends Component {

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
   // replace with id from the store
   let id = 1
   const deleteUser = await
    fetch(`https://keeptheglow.herokuapp.com/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     }
   }).then(response => {
     console.log("user deleted:", response)
   })

 }

  render() {
    return (
      <Popup
        header='Delete Account'
        content='Are you sure you want to delete your account? All of your data will be removed, and your partner will also lose all feedback.'
        buttonText="I'm sure."
        form={false}
      />
    )
  }
}

export default DeleteAccount
