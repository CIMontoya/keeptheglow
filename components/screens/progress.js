import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import { connect } from 'react-redux'

class Progress extends Component {

  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text>HELLO</Text>

        </View>
        <View style={Styles.body}>
          <View>

          </View>
        </View>
        <BottomNav
          nav={navigate}/>
      </View>

    )

  }
}
const mapStateToProps = state => {
  return {
    userScores: state.user.userScores
  }
}

export default connect(mapStateToProps)(Progress)
