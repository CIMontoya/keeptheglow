import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class PartnerTakes0 extends Component {

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
    const { partner, partnerFeelings } = this.props.user

    let unloved0

    if(partnerFeelings){
      unloved = partnerFeelings.filter(feeling => feeling.is_loved === false)
      unloved0 = unloved[0]

    }

    return (
      <Popup
        header={unloved0.name}
        content={unloved0.description}
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

export default connect(mapStateToProps)(PartnerTakes0)
