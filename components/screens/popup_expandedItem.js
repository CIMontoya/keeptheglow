import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'

class Gives1 extends Component {

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
    const { navigate } = this.props.navigation
    return (
      <Popup
        header='Quality Time'
        content='I need us to spend time together, without any distractions of social media, emails, etc. An opportunity for us to talk and love on each other, like cooking together like we use to.'
        nav={navigate}
        screen="User"
      />
    )
  }
}

export default Gives1
