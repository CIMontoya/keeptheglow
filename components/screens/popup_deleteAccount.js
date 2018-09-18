import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

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
   let id = this.props.userId
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
        header='Delete Account'
        content='Are you sure you want to delete your account? All of your data will be removed, and your partner will also lose all feedback.'
        buttonText="Delete My Account"
        nav={navigate}
        screen='Settings'
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userData.user[0].id
  }
}

export default connect(mapStateToProps)(DeleteAccount)
