import React, {Component} from 'react'
import { Text, View, TouchableOpacity, Image, Slider, TextInput } from 'react-native'
import Button from 'react-native-button'
import Styles from '../styles.js'
import { connect } from 'react-redux'

class FeedbackGives2 extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }

  static navigationOptions = {
   header: null
  }

  sliderChange(value) {
   this.setState(() => {
      return {
        value: parseFloat(value),
      }
    })
 }

  render() {
    const { navigate } = this.props.navigation
    const {value} = this.state
    const { user, userFeelings } = this.props.user

    let loved2

    if(userFeelings){
        loved = userFeelings.filter(feeling => feeling.is_loved === true)
        loved2 = loved[2]
    }

    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={()=>navigate('User')}>
            <Image
              style={Styles.closeButton}
              source={require('../../assets/icons/close.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.body}>
          <View style={Styles.giveFeedback}>
            <View style={Styles.giveHeader}>
              <Text style={Styles.h2}>How did your partner do on
                <Text style={Styles.highlight}> {loved2.name} </Text>this week?
              </Text>
            </View>
            <View style={Styles.spacerLarge}></View>

            <View style={Styles.giveScore}>
              <Image
                style={Styles.smile}
                source={require('../../assets/icons/score_bad.png')}
              />
              <Text style={Styles.h2}>{this.state.value}</Text>
              <Image
                style={Styles.smile}
                source={require('../../assets/icons/score_good.png')}
              />
            </View>

            <View style={Styles.spacerSmall}></View>

            <View style ={Styles.sliderContainer}>
              <Slider
                // maximumTrackTintColor="pink"
                minimumTrackTintColor="#30E7CE"
                step={1}
                maximumValue={10}
                onValueChange={this.sliderChange.bind(this)}
                value={value}>
              </Slider>
            </View>

            <View style={Styles.spacerLarge}></View>

            <View style={Styles.giveCenter}>
              <TextInput
                multiline={true}
                placeholder='What could they have done to get a better score?'
                style={Styles.addDescription}/>
            </View>

          <View style={Styles.spacerLarge}></View>
            <View style={Styles.giveCenter}>
              <Button
                style={Styles.buttonText}
                containerStyle={Styles.buttonBox}
                onValueChange={(e) => this.sliderChange(e.target.value)}
                onPress={()=>navigate('Gives1')}
                title='Next'>
                Next
              </Button>
            </View>
          </View>
        </View>
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

export default connect(mapStateToProps)(FeedbackGives2)
