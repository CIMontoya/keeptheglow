import React, {Component} from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import Button from 'react-native-button'
import Styles from '../styles.js'
import firebase from 'react-native-firebase'

class Loader extends Component {

  constructor(props){
    super(props)
    
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'User' : 'Signup')
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size='large'/>
      </View>
    )
  }
}

export default Loader
