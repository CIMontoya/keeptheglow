import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'

class ProgressTakes extends Component {

  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props)
    this.state = {
      currentScores: null,
    }
  }

  static navigationOptions = {
    header: null
  }

  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <View style={Styles.profileHeader}>
          <View style={Styles.profileTop}>
            <View style={Styles.cornerLeft}>
              <TouchableOpacity
                onPress={() => navigate('ProgressGives')}>
                <Image
                  style={Styles.graphImg1}
                  source={require('../../assets/icons/plus_circle.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.cornerRight}>

                <Image
                  style={Styles.graphImg2}
                  source={require('../../assets/icons/minus_circle_purple.png')}
                />

            </View>
          </View>
        </View>
          <View style={Styles.progressBody}>
            <View style={Styles.graph1}>
              <Text style={Styles.h1black}> Progress: Takes</Text>
              <Text style={Styles.pCenterBlack}>These are your scores for this week, compared with the average of all your scores for each Take.</Text>
            </View>
            <View style={Styles.spacerMedium}></View>
            <View style={Styles.graph2}>
              <Image
                style={Styles.graphImg}
                source={require('../../assets/negatives.png')}/>
            </View>
          </View>
          <BottomNav
            nav={navigate}/>
        </View>
      )
    }
  }

export default ProgressTakes
