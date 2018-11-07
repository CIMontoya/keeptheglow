import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity, Slider, TextInput } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class PartnerGives1 extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation
    const { partner, partnerFeelings } = this.props.user

    let loved1

    if(partnerFeelings){
        loved = partnerFeelings.filter(feeling => feeling.is_loved === true)
        loved1 = loved[1]

    }

    return (
      <Popup
        header={loved1.name}
        content={loved1.description}
        nav={navigate}
        screen="Partner"
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

export default connect(mapStateToProps)(PartnerGives1)
