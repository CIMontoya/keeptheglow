import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Styles from '../styles.js'
import AuthForm from '../reusable/auth.js'
import t from 'tcomb-form-native'
import firebase from 'react-native-firebase'

const signup = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  terms: t.Boolean
})

class Signup extends Component {

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
        header='Signup'
        description='Improve your relationship with Keep The Glow'
        type={signup}
        buttonText='Signup'
        toggle={true}
        press='Signup'
      />
    )
  }
}

export default Signup
