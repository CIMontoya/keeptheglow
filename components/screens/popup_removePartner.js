import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Button from 'react-native-button'
import Styles from '../styles.js'

class RemovePartner extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: true
    }
  }

  static navigationOptions = {
   header: null
  }
  onSubmit = async () => {
    // replace id with data from the store
    let id = 2

    const deleteCouple = await fetch(`https://keeptheglow.herokuapp.com/api/couples/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     }
   }).then(response => {
     console.log("couple to be deleted:", response)
     navigate('User')
   })

 }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View
          style={Styles.header}
          >
          <TouchableOpacity
            onPress={()=>navigate('Settings')}>
            <Image
              style={Styles.closeButton}
              source={require('../../assets/icons/close.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.body}>
          <View style={Styles.popUp}>
            <Text
              style={Styles.h1black}>
              Remove Partner
            </Text>
            <View style={Styles.spacerMedium}></View>
            <Text
              style={Styles.pCenterBlack}>
              Are you sure you want to remove your partner? You will lose access to all feedback they have provided you, as well as their lists. They will also lose your feedback and lists.
            </Text>
            <View style={Styles.spacerMedium}></View>

            <Button
              style={Styles.buttonText2}
              containerStyle={Styles.buttonBox2}
            >Remove Partner</Button>

          </View>
        </View>
      </View>
    )
  }
}

export default RemovePartner
