import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
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

var options = {
  fields: {
    name:{
      placeholderTextColor: 'white'
    },
    email:{
      placeholderTextColor: 'white'
    },
    password: {
      password: true,
      secureTextEntry: true,
      placeholderTextColor: 'white'
    }
  },
  auto: 'placeholders'
}

const signup = t.struct({
  name: t.String,
  email: t.String,
  password: t.String
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
    const pic = require('../../assets/gradient_dark.png')
    const { navigate } = this.props.navigation
    return (
      <ImageBackground
        source={pic}
        style={{
          width:380,
          height:670,
          flex: 1,
          flexDirection: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Keep The Glow
            </Text>
            <View style={Styles.spacerSmall}></View>
            <Text style={Styles.pCenter}>
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
               <Text style={Styles.pCenter}>Already have an account? Login.</Text>
            </TouchableOpacity>
            <View style={Styles.spacerMedium}></View>
              {this.state.error && <Text style={{ color: 'red' }}>
                {this.state.error}
              </Text>}
          </View>
        </View>
      </View>
    </ImageBackground>
    )
  }
}

export default Signup
