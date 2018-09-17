import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Styles from '../styles.js'
import t from 'tcomb-form-native'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Form = t.form.Form

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return reg.test(email)
})

t.form.Form.stylesheet.textbox.normal.color = 'black'
t.form.Form.stylesheet.textbox.normal.width = 300
t.form.Form.stylesheet.textbox.normal.borderRadius = 3
t.form.Form.stylesheet.controlLabel.normal.display = 'none'

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  },
  auto: 'placeholders'
}

const signup = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  terms: t.Boolean
})

class Signup extends Component {

  constructor(props){
    super(props)
    this.state = {
      error: ''
    }
  }

  static navigationOptions = {
    header: null
  }

  handleSignup = () => {
    const value = this._form.getValue()
    const { email, password } = value
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .then(() => console.log('Signed up'))
        .catch(error => this.setState({ error: error.message }))
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Signup
            </Text>
            <View style={Styles.spacerSmall}></View>
            <Text>
              Welcome to Keep The Glow. Signup with your name, email and password.
            </Text>
            <View style={Styles.spacerLarge}></View>
            <Form
              options={options}
              ref={c => this._form = c}
              type={signup}
            />
            <View style={Styles.spacerMedium}></View>
            <ButtonElement
              buttonText="Signup"
              press={this.handleSignup}
            />
            <View style={Styles.spacerMedium}></View>

            <TouchableOpacity
              onPress={()=>navigate('Login')}>
               <Text>Already have an account? Login.</Text>
            </TouchableOpacity>
            <View>
              {this.state.error && <Text style={{ color: 'red' }}>
                {this.state.error}
              </Text>}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Signup
