import React, {Component} from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import ButtonElement from '../reusable/button.js'
import Button from 'react-native-button'
import ListItem from '../reusable/listItem1.js'
import Styles from '../styles.js'
import RNPickerSelect from 'react-native-picker-select'
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserData, createList } from '../../actions/user.js'

const Form = t.form.form

const Send = t.struct({
  description: t.String,

})
class CreateList0 extends Component {

  static navigationOptions = {
   header: null
 }

 constructor(props) {
     super(props)

     this.state = {
         list: '',
         gives: '',
         items: [],
         new: [],
         progress: []
     }
 }
//api call to static feelings
  async componentWillMount() {

    const listResponse = await fetch('http://localhost:8000/api/static')
    const listJSON = await listResponse.json()

    let lovedList = listJSON.slice(0, 7)
    let items = []

    lovedList.map((item) => {
      let obj = {
        label: item.name,
        value: item.name
      }
      items.push(obj)
    })

    this.setState({items: items})
  }


  onSubmit = async (navigate) => {

    const newFeeling = {
      description: null,
      is_loved: true,
      is_default: true
    }

    if(this.state.new.length){
      newFeeling.name = this.state.new
      newFeeling.is_default = false
    } else {
      newFeeling.name = this.state.suggested
    }

    if(this.state.description){
      newFeeling.description = this.state.description
    }

    // update id to come from store
    let id = 1

      const response1 = await
      fetch(`http://localhost:8000/api/users/api/users/${id}/feelings`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeeling)
      })


    let response1JSON = await response1.json()
  }

  sendList = () => {
    console.log("Next works")
    this.props.createList(this.state.lis)
    this.props.navigation.navigate('CreateList1')
  }

  render() {
    const { navigate } = this.props.navigation
    const { user, userFeelings, partner, partnerFeelings } = this.props.user


    // console.log("user from createlist0", user[0].id)

    console.log(this.state, "state from createlist0")





    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.h1black}>
              Gives: 1
            </Text>
            <Text
              style={Styles.pCenterBlack}>
              What are the top 3 things that make you feel loved, respected and wanted?Give a description on why this is important to you, based on your passed experiences.
            </Text>

            <View style={Styles.setting}>
              <View style={Styles.dropdown}>
                <RNPickerSelect
                  hideIcon={true}
                  placeholder={{
                    label: 'Choose from list...',
                    value: null
                  }}
                  items={this.state.items}
                  onValueChange={(value) => {
                    this.setState({
                      suggested: value,
                    })
                  }}>
                </RNPickerSelect>
              </View>
            </View>

            <View style={Styles.spacerSmall}></View>

            <TextInput
              placeholder='Or create your own...'
              style={Styles.textInputDark}
              onChangeText={(value) => {
                this.setState({
                  new: value,
                })
              }}>
            </TextInput>

            <View style={Styles.spacerSmall}></View>

            <TextInput
              multiline={true}
              placeholder='Provide a description. These items may be things your partner used to provide but stopped, is currently providing, or has never provided but you’d love it if they did.'
              style={Styles.addDescription}
              onChangeText={(value) => {
                this.setState({
                  description: value,
                })
              }}>
            </TextInput>

            <View style={Styles.spacerMedium}></View>

            <View style={Styles.sendFeedback}>
              <ButtonElement
                buttonText="Next"
                press={this.sendList}
              />

            </View>
          </View>
        </View>
      </View>
    )
  }
}

//grabs data from store
const mapStateToProps = state => {
  return {
    user: state.user.userData,
  }
}

//takes dispatch, gives us access to that action to be triggered
const mapDispatchToProps = dispatch => bindActionCreators({
  setUserData,
  createList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList0)
