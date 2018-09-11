import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Styles from '../styles.js'
import AuthForm from '../reusable/auth.js'
import t from 'tcomb-form-native'
import firebase from 'react-native-firebase'

const login = t.struct({
  email: t.String,
  password: t.String,
})

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AuthForm
        header='Login'
        description='Welcome back!'
        type={login}
        buttonText='Login'
        toggle={true}
        press='Login'
      />
    )
  }
}

export default Login
