import React, {Component} from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserScores } from '../../actions/scores.js'

class Progress extends Component {

  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props)
    this.state = {}
  }

  // componentWillMount(){

    // this.setState({ currentUser })
    // this.props.setUserData(currentUser && currentUser.email)
    // if(currentUser){
    //   this.getscores(userData.user[0].id)
    // }

  // }
  // getScores = (id) => {this.props.setUserScores(id)}
  // if(currentUser){
  //   // this.props.setUserScores(userData.user[0].id)
  // }

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

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserScores
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Progress)
