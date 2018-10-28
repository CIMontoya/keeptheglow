import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Styles from '../styles.js'
import ButtonElement from '../reusable/button.js'
import t from 'tcomb-form-native'
import firebase from 'react-native-firebase'

const Form = t.form.Form

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return reg.test(email)
})

const editAccount = t.struct({
  name: t.String,
  email: t.String,
  password: t.String
})

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  },
  auto: 'placeholders'
}

class EditAccount extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  static navigationOptions = {
    header: null
  }

  onSubmit = () => {
    console.log('click is working')
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
        <View style={Styles.backHeader}>
          <TouchableOpacity
            onPress={()=>navigate('Settings')}>
            <Image
              style={Styles.backButton}
              source={require('../../assets/icons/back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              Edit Account
            </Text>
            <View style={Styles.spacerSmall}></View>
            <Text>
              Make sure to click save!
            </Text>
            <View style={Styles.spacerLarge}></View>
            <Form
              options={options}
              ref={c => this._form = c}
              type={editAccount}
            />
            <View style={Styles.spacerMedium}></View>
            <ButtonElement
              buttonText="Save Changes"
              press={this.onSubmit}
            />
          </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}

export default EditAccount
