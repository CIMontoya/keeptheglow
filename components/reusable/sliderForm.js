import React, {Component} from 'react'
import { Text, View, Image, Slider } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Styles from '../styles.js'

class SliderForm extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  static navigationOptions = {
   header: null
 }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}></View>
        <View style={Styles.body}>
          <View style={Styles.giveFeedback}>
            <View style={Styles.giveText}>
              <Text style={Styles.h2}>How did your partner do this week?</Text>
            </View>
            <View style ={Styles.sliderContainer}>

              <View style={Styles.spacerLarge}></View>
              <Text style={Styles.p}>Quality Time</Text>
              <Text style={Styles.p}>4</Text>
              <View style={Styles.spacerSmall}></View>
              <Slider
                step={1}
                maximumValue={10}></Slider>
            </View>
            <View style ={Styles.sliderContainer}>
              <View style={Styles.spacerLarge}></View>
              <Text style={Styles.p}>Sexual Intimacy</Text>
              <Text style={Styles.p}>7</Text>
              <View style={Styles.spacerSmall}></View>
              <Slider
                step={1}
                maximumValue={10}></Slider>
            </View>
            <View style ={Styles.sliderContainer}>
              <View style={Styles.spacerLarge}></View>
              <Text style={Styles.p}>Sexual Intimacy</Text>
              <Text style={Styles.p}>7</Text>
              <View style={Styles.spacerSmall}></View>
              <Slider
                step={1}
                maximumValue={10}></Slider>
            </View>
          <View style={Styles.spacerLarge}></View>
          <ButtonElement/>
          </View>
        </View>
      </View>
    )
  }
}

export default SliderForm
