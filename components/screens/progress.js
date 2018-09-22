import React, {Animated, Component} from 'react'
import { Text, View, Image } from 'react-native'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import { connect } from 'react-redux'

class Progress extends Component {

  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props)
    this.state = {
      currentScores: null,
    }
  }

  render(){
    const { navigate } = this.props.navigation
    const { data } = this.props.scores

    let lovedList


    if(data){
      lovedList = data.filter(score =>
        score.is_loved === true)

          console.log("lovedList", lovedList)
          console.log("data:", data)
    }

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
    user: state.user.userData,
    scores: state.user.scores
  }
}

export default connect(mapStateToProps)(Progress)
