import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Styles from '../styles.js'
import t from 'tcomb-form-native'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserData } from '../../actions/user.js'

const Form = t.form.Form

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return reg.test(email)
})

t.form.Form.stylesheet.textbox.normal.color = 'white'
t.form.Form.stylesheet.textbox.normal.fontFamily = 'Avenir'
t.form.Form.stylesheet.textbox.normal.fontSize = 20
t.form.Form.stylesheet.textbox.normal.width = 300
t.form.Form.stylesheet.textbox.normal.height = 45
t.form.Form.stylesheet.textbox.normal.borderColor = 'white'
t.form.Form.stylesheet.textbox.normal.borderWidth = 2.5
t.form.Form.stylesheet.textbox.normal.borderRadius = 3
t.form.Form.stylesheet.controlLabel.normal.display = 'none'

var options = {
  fields: {
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

const login = t.struct({
  email: t.String,
  password: t.String,
})

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      error: ''
    }
  }

  static navigationOptions = {
    header: null
  }

  handleLogin = () => {
    const value = this._form.getValue()
    const { email, password } = value
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
        .then(() => console.log('logged in'))
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
      <View style={Styles.containerAuth}>
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
              Welcome back! Login with your email and password.
            </Text>
            <View style={Styles.spacerLarge}></View>
            <Form
              options={options}
              ref={c => this._form = c}
              type={login}
            />
            <View style={Styles.spacerMedium}></View>
            <ButtonElement
              buttonText="Login"
              press={this.handleLogin}
            />
            <View style={Styles.spacerLarge}></View>
            <View style={Styles.spacerSmall}></View>
            <TouchableOpacity
              onPress={()=>navigate('Signup')}>
               <Text style={Styles.pCenter}>Don't have an account? Signup.</Text>
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

//grabs data from store
const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

//takes dispatch, gives us access to that action to be triggered 
const mapDispatchToProps = dispatch => bindActionCreators({
  setUserData
}, dispatch)

// export default Login

export default connect(mapStateToProps, mapDispatchToProps)(Login)
