import React, {Component} from 'react'
import { Text, View, TouchableOpacity, Image, Slider, TextInput } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class PartnerGives0 extends Component {

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

    let loved0

  console.log(partnerFeelings, "partner from gives0")

    if(partnerFeelings){
      console.log(this.props.user, "user on gives0")
        loved = partnerFeelings.filter(feeling => feeling.is_loved === true)
        loved0 = loved[0]
    }

    return (
      <Popup
        header={loved0.name}
        content={loved0.description}
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

export default connect(mapStateToProps)(PartnerGives0)
