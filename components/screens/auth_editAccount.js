import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import Styles from '../styles.js'
import AuthForm from '../reusable/auth.js'
import t from 'tcomb-form-native'

const editAccount = t.struct({
  name: t.String,
  email: t.String,
  password: t.String
})

class EditAccount extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: 'editAccount'
    }
  }

  onChange = () => {}
  onSubmit = () => {}

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AuthForm
        header='Edit your account...'
        description='Make sure to click save!'
        type='editAccount'
        buttonText='Save Changes'
        toggle={false}
      />
    )
  }
}

export default EditAccount
