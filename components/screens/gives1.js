import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class Gives1 extends Component {

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

    let loved1

    if(userFeelings){
        loved = userFeelings.filter(feeling => feeling.is_loved === true)
        loved1 = loved[1]

    }

    return (
      <Popup
        header={loved1.name}
        content={loved1.description}
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

export default connect(mapStateToProps)(Gives1)
