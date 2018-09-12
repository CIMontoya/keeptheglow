import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Styles from '../styles.js'

class NavItem extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <TouchableOpacity
        style={Styles.navItem}
        onPress={()=>this.props.nav(this.props.press)}
      >
        <Image
          style={Styles.navIcon}
          source={this.props.src}/>
      </TouchableOpacity>
    )
  }
}

export default NavItem
