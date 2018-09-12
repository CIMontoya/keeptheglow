import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Styles from '../styles.js'
import t from 'tcomb-form-native'
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserData } from '../../actions/login.js'

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

  handleLogin = () => {
    const value = this._form.getValue()
    const { email, password } = value
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
        .then(() => console.log('logged in'))
        .catch(error => console.log('login failed', error))
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
              Login
            </Text>
            <View style={Styles.spacerSmall}></View>
            <Text>
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
            <View style={Styles.spacerMedium}></View>
            <TouchableOpacity
              onPress={()=>navigate('Signup')}>
               <Text>Don't have an account? Signup.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserData
}, dispatch)

// export default Login

export default connect(mapStateToProps, mapDispatchToProps)(Login)
