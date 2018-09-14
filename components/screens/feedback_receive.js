import React, {Component} from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import ListItem from '../reusable/listItem.js'
import Styles from '../styles.js'
import RNPickerSelect from 'react-native-picker-select';

class EditList extends Component {

  static navigationOptions = {
   header: null
 }

 constructor(props) {
     super(props);

     this.state = {
         gives: '',
         items: [
             {
                 label: 'Quality Time',
                 value: 'Quality Time',
             },
             {
                 label: 'Sexual Intimacy',
                 value: 'Sexual Intimacy',
             },
             {
                 label: 'Alone Time',
                 value: 'Alone Time',
             },
         ],
     };
 }


  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.backHeader}>
          <Image
            style={Styles.backButton}
            source={require('../../assets/img/backButton.png')}
          />
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.pCenter}>
              Edit your Deposits list by choosing from some suggestions or create your own new one.
            </Text>
          </View>
          <View style={Styles.createList}>
            <View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/Circle_1.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <RNPickerSelect
                    items={this.state.items}
                    onValueChange={(value) => {
                      this.setState({
                        gives: value,
                      });
                    }}
                    >
                        </RNPickerSelect>
                    </View>
                <View style={Styles.sideSpacerSmall}></View>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/RemoveButton.png')}
                />
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/Circle_2.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <RNPickerSelect
                    items={this.state.items}
                    onValueChange={(value) => {
                      this.setState({
                        gives: value,
                      });
                    }}
                    >
                        </RNPickerSelect>
                    </View>
                  <View style={Styles.sideSpacerSmall}></View>
                  <Image
                    style={Styles.circle}
                    source={require('../../assets/img/RemoveButton.png')}
                  />
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/Circle_3.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <RNPickerSelect
                    items={this.state.items}
                    onValueChange={(value) => {
                      this.setState({
                        gives: value,
                      });
                    }}
                    >
                        </RNPickerSelect>
                    </View>
                <View style={Styles.sideSpacerSmall}></View>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/img/RemoveButton.png')}
                />
              </View>
            </View>
          </View>
          <View style={Styles.spacerLarge}></View>
          <View style={Styles.createList}>

            <View style={Styles.spacerSmall}></View>
            <TextInput
              placeholder='Create your own...'
              style={Styles.textInput}>
            </TextInput>
          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
            </View>
        </View>
      </View>
    )
  }
}

export default EditList
