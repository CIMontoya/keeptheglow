import React, {Component} from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Styles from '../styles.js'
import BottomNav from '../reusable/nav.js'
import FeedbackItem from '../reusable/feedbackitem.js'

class ReceiveFeedback extends Component {

  constructor(props){
    super(props)
    this.state = {
      scores: []
    }
  }
  static navigationOptions = {
   header: null
 }

 async componentWillMount() {
   const listResponse = await fetch('https://relationship-backend.herokuapp.com/api/users/2/sent_scores/is_loved')
   const listJSON = await listResponse.json()

   const listJSONData = listJSON.data

  this.setState({scores: listJSONData})
 }

  render() {

    const { navigate } = this.props.navigation
    const scores = this.state.scores

    return (
      <View style={Styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.header}>
            <TouchableOpacity
              onPress={() => navigate('User1')}
              >
              <Image
                style={Styles.closeButton}
                source={require('../../assets/img/CloseButton.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={Styles.body}>

            <Text>July, 2018</Text>
            <View style={Styles.spacerSmall}></View>
            <Text style={Styles.h1}>Gives</Text>
            <FeedbackItem
              name="Quality Time - 7"
              feedback="I really liked it when we went for a walk at Boulder Creek on Monday."
            />
            <FeedbackItem
              name="Appreciation - 8"
              feedback="I liked that you surpised me at work during lunch yesterday, that made my day."
            />
            <FeedbackItem
              name="Communication - 4"
              feedback="When you made last minute plans on Tuesday it threw off my whole week."
            />
            <View style={Styles.spacerMedium}></View>
            <Text style={Styles.h1}>Takes</Text>
            <FeedbackItem
              name="Not Contributing - 6"
              feedback="I loved that you took the initiative every day this week."
            />
            <FeedbackItem
              name="Micro Managing - 4"
              feedback="I didn't like it when you made plans for us Friday night without asking if I was available, and I had to re-arrange my plans."
            />
            <FeedbackItem
              name="Critical - 5"
              feedback="It hurt my feelings when you said I wasn't good at chess."
            />

          </View>
        </ScrollView>
        <BottomNav
          nav={navigate}/>
      </View>


    )
  }
}

export default ReceiveFeedback
