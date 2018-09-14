import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Styles from '../styles.js'
import t from 'tcomb-form-native'

const Form = t.form.Form
const edit = t.struct({
  description: t.String
})
var options = {
  auto: 'placeholders'
}

class Popup extends Component {

  constructor(props){
    super(props)
  }

  static navigationOptions = {
   header: null
 }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity>
            <Image
              style={Styles.closeButton}
              source={require('../../assets/img/CloseButton.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1}>
              {this.props.header}
            </Text>
            <View style={Styles.spacerMedium}></View>
            <Text
              style={Styles.pCenter}>
              {this.props.content}
            </Text>
            {this.props.form ? <Form
              options={options}
              ref={c => this._form = c}
              type={edit}
            /> : <View/>}
            <View style={Styles.spacerMedium}></View>

            {this.props.buttonText ? <ButtonElement
              buttonText={this.props.buttonText}
            /> : <View/>}

          </View>
        </View>
      </View>
    )
  }
}

export default Popup
