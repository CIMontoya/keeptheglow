import React, {Component} from 'react'
import { Text, View } from 'react-native'
import NavItem from './navItem.js'
import Styles from '../styles.js'

class BottomNav extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <View style={Styles.navigation}>
        <NavItem
          src={require('../../assets/icons/couple.png')}
          press='User'
          nav={this.props.nav}/>
        <NavItem
          src={require('../../assets/icons/send_feedback.png')}
          press='SendFeedback'
          nav={this.props.nav}/>
        <NavItem
          src={require('../../assets/icons/feedback_quote.png')}
          press='ReceiveFeedback'
          nav={this.props.nav}/>
        <NavItem
          src={require('../../assets/icons/progress.png')}
          press='Progress'
          nav={this.props.nav}/>
      </View>
    )
  }
}

export default BottomNav
