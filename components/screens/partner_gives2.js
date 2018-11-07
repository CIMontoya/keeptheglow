import React, {Component} from 'react'
import { Text, View, TouchableOpacity, Image, Slider, TextInput } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class PartnerGives2 extends Component {

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

    let loved2



    if(partnerFeelings){
        loved = partnerFeelings.filter(feeling => feeling.is_loved === true)
        loved2 = loved[2]
    }

    return (
      <Popup
        header={loved2.name}
        content={loved2.description}
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

export default connect(mapStateToProps)(PartnerGives2)
