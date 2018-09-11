import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import ButtonElement from './button.js'
import Styles from '../styles.js'
import t from 'tcomb-form-native'
import firebase from 'react-native-firebase'

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
    name: {
      label: 'Name',
      attrs: {
        placeholder: 'Johnny Appleseed'
      }
    },
    password: {
      password: true,
      secureTextEntry: true
    }
  },
  auto: 'placeholders'
}

class AuthForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      errorMessage : null
    }
  }

  static navigationOptions = {
   header: null
 }

  onSubmit = () => {
    if(this.props.press === 'Signup'){
      const value = this._form.getValue()
      const { email, password } = value
      firebase
        .auth()
        .createUserAndRetrieveDataWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('User'))
          .catch(error => console.log('signup failed'))
    }
    if(this.props.press === 'Login'){
      const value = this._form.getValue()
      console.log("value", value)
      const { email, password } = value
      firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password)
        .then(() => console.log('logged in'))
        .catch(error => console.log('login failed', error))
    }
    if(this.props.press === 'AddPartner'){

    }
    if(this.props.press === 'EditAccount'){

    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              {this.props.header}
            </Text>
            <View style={Styles.spacerSmall}></View>
            <Text>
              {this.props.description}
            </Text>
            <View style={Styles.spacerLarge}></View>
            <Form
              options={options}
              ref={c => this._form = c}
              type={this.props.type}
            />
            <View style={Styles.spacerMedium}></View>
            <ButtonElement
              buttonText={this.props.buttonText}
              press={this.onSubmit}
            />
            <View style={Styles.spacerMedium}></View>

            {this.props.toggle ? <TouchableOpacity>
               <Text>Don't have an account? Signup.</Text>
            </TouchableOpacity> : <View/>}

          </View>
        </View>
      </View>
    )
  }
}

export default AuthForm
