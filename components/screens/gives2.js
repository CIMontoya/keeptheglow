import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class Gives2 extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: true
    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    const { navigate } = this.props.navigation
    const { user, userFeelings } = this.props.user

    let loved2

    if(userFeelings){
        loved = userFeelings.filter(feeling => feeling.is_loved === true)
        loved2 = loved[2]

    }

    return (
      <Popup
        header={loved2.name}
        content={loved2.description}
        nav={navigate}
        screen="User"
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userData,
    scores: state.user.scores
  }
}

export default connect(mapStateToProps)(Gives2)
