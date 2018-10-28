import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class Gives4 extends Component {

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
    // const { partnerFeelings } = this.props.user
    //
    // let loved0
    //
    // if(partnerFeelings){
    //     console.log(this.props.user)
    //     loved = partnerFeelings.filter(feeling => feeling.is_loved === true)
    //     loved0 = loved[0]
    //
    // }

    return (
      <Popup
        header='Adoration'
        content='I love it when you express your love through physical touch.'
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

export default connect(mapStateToProps)(Gives4)
