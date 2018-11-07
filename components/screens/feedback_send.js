import React, {Component} from 'react'
import { Text, View, Image, Slider, TextInput, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Button from 'react-native-button'
import Styles from '../styles.js'
import t from 'tcomb-form-native'

const Form = t.form.Form

const send = t.struct({
  feedback: t.String,
  score: t.Number,
})

var options = {
  fields: {
    feedback:{
      multiline: true,
    }
  },
  auto: 'placeholders'
}

class SendFeedback extends Component {

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
     console.log("test")
    const { navigate } = this.props.navigation
    const {value} = this.state


    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={()=>navigate('SaveFeedback')}>
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
                <Text style={Styles.highlight}> Quality Time </Text>this week?
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
                onPress={()=>navigate('Gives1')}>Next</Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default SendFeedback
