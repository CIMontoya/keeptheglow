import React, {Component} from 'react'
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import Styles from '../styles.js'
import ButtonElement from '../reusable/button.js'
import Button from 'react-native-button'


class Intro extends Component {

  static navigationOptions = {
   header: null
 }

 constructor(props) {
     super(props);
 }


  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={Styles.container}>
        <View style={Styles.backHeader}>
          <TouchableOpacity
            onPress={() => navigate('User')}>
            <Image
              style={Styles.backButton}
              source={require('../../assets/icons/back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.pCenter}>
              Steps to setup your account.
            </Text>
          </View>
          <View style={Styles.createList}>
            <View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/icons/number1.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <Text>Add your Partner's email to link your account.</Text>
                </View>
                <View style={Styles.sideSpacerSmall}></View>
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/icons/number2.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <Text>Add 3 feelings that make you feel loved</Text>
                </View>
                <View style={Styles.sideSpacerSmall}></View>
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/icons/number3.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <Text>Add 3 feelings that make you feel unloved</Text>
                </View>
                <View style={Styles.sideSpacerSmall}></View>
              </View>
            </View>
          </View>
          <View style={Styles.spacerLarge}></View>
          <View style={Styles.createList}>

            <View style={Styles.spacerSmall}></View>

            <Button
              style={Styles.buttonText}
              containerStyle={Styles.buttonBox}
              onPress={() => navigate('AddPartner')}

              title='Next'>
              Next
            </Button>

          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
            </View>
        </View>
      </View>
    )
  }
}

<ButtonElement
  buttonText="Let's get started"
  onPress={() => navigate('user')}
/>

export default Intro
