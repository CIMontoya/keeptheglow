import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'
import Styles from '../styles.js'
import AuthForm from '../reusable/auth.js'
import t from 'tcomb-form-native'

const addPartner = t.struct({
  email: t.String
})

class AddPartner extends Component {

  constructor(props){
    super(props)
    this.state = {
      account: 'addPartner'
    }
  }

  onSubmit = async (navigate) => {

    const newPartner = {
      user1_id: 1,
      user2_id: 2
    }

    const response = await fetch('https://keeptheglow.herokuapp.com/api/couples', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(newPartner)
    })

    let responseJSON = await response.json()
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AuthForm
        header='Add your partner...'
        description='Your partner must aleady have an account in order to add them.'
        buttonText='Add Partner'
        type={addPartner}
        toggle={false}
      />
    )
  }
}

export default AddPartner
