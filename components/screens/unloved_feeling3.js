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
import { setUserData, createListItem} from '../../actions/user.js'

const Form = t.form.form

const Send = t.struct({
  description: t.String,

})
class UnlovedFeeling3 extends Component {

  static navigationOptions = {
   header: null
 }

 constructor(props) {
     super(props)

     this.state = {
         list: '',
         gives: '',
         name: [],
         progress: []
     }
 }

  storeListItem = () => {

    listItem = {
      name: this.state.name,
      description: this.state.description,
      is_loved: false,
    }

    console.log(this.props.createListItem, "loved feeling 3")

    this.props.createListItem(listItem)

    

    this.props.navigation.navigate('Partner')


  }

  render() {
    const { navigate } = this.props.navigation
    const { user, userFeelings, partner, partnerFeelings } = this.props.user

    const staticFeelings = this.props.staticFeelings

    let unlovedStaticFeelings
    let items = []

    if(staticFeelings) {
      unlovedStaticFeelings = staticFeelings.filter(feeling => feeling.is_loved === false)
    }

    unlovedStaticFeelings.map((item) => {
      let obj = {
        label: item.name,
        value: item.name
      }
      items.push(obj)
    })

console.log(this.props.list_items, "unloved Feeling 3")

    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.h1black}>
              Takes: 3
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
                  items={items}
                  onValueChange={(value) => {
                    this.setState({
                      name: value,
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
                  name: value,
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
                press={this.storeListItem}
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
    staticFeelings: state.user.staticFeelings,
    list_items: state.user.createList
  }
}

//takes dispatch, gives us access to that action to be triggered
const mapDispatchToProps = dispatch => bindActionCreators({
  setUserData,
  createListItem
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UnlovedFeeling3)
