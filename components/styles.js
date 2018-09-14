const Styles = {
/** Screen Styles **/
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },

  header : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 25,
    paddingTop: 15
  },

  backHeader : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingTop: 25
  },

  body : {
    flex: 8,
    flexDirection: 'column',
    padding:20
  },

/** Elements **/

spacerLarge: {
  paddingTop: 15,
  paddingBottom: 15
},

  spacerMedium: {
    paddingTop: 10,
    paddingBottom: 10
  },

  spacerSmall: {
    paddingTop: 5,
    paddingBottom: 5
  },

  closeButton: {
    height: 20,
    width: 20
  },

  backButton: {
    height: 20,
    width: 20
  },

  hr: {
    borderTopWidth: 1,
    borderTopColor: 'black',
  },

  textInput: {
    color: 'black',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    width: 300,
    height: 40,
    padding: 10,
  },

  h1: {
    color: 'black',
    fontSize: 28,
    paddingBottom: 20
  },

  h2: {
    color: 'black',
    fontSize: 18,
    paddingBottom: 10
  },

  highlight: {
    fontWeight: '700'
  },

  pCenter: {
    paddingBottom: 20,
    textAlign: 'center',
    padding: 10,
  },

  buttonText: {
    color: '#30E7CE'
  },

  buttonBox: {
    backgroundColor: 'white',
    borderColor: '#30E7CE',
    borderWidth: 2,
    height: 50,
    width: 200,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  dropdown: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    width: 300,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  navigation: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  navItem: {
    flex: 1,
    height: 50,
    borderRightWidth: 1,
    borderRightColor: 'black',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  navIcon: {
    // flex: 1,
    width: 75,
    height: 75
  },

  /** Popup Styles **/

  popUp:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    textAlign: 'center',
    },

    addDescription: {
      height: 150,
      width: 300,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: 'grey',
      paddingLeft: 15,
      paddingTop: 15,
      paddingRight: 15,
      paddingBottom: 15,
    },
  /** Create List Styles **/
  createList:{
    flexbox: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    textAlign: 'center',
    },
  /** Couple Styles **/

  couples: {
    flex: 1,
    flexDirection: 'column'
  },

  profileToggle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 40
  },

  posNeg: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  list: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  listHalf1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  listHalf2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  listItemText: {
    color: 'white',
    fontSize: 16
  },

  listItemBox: {
    backgroundColor: '#30E7CE',
    borderColor: '#30E7CE',
    borderWidth: 2,
    height: 40,
    width: 160,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePic: {
    height: 100,
    width: 100,
    borderRadius:100/2
  },

  profilePic2: {
    height: 100,
    width: 100,
    borderRadius:100/2,
    opacity: 20/100
  },

  plusMinus: {
    height: 30,
    width: 30
  },

  sendFeedback: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /** User Styles **/

  user : {
    paddingLeft: 20,
    paddingRight: 20
  },

  userPic: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },

  editPic: {
    width: 20,
    height: 20,
    marginLeft: 40,
    marginTop: -10,
    backgroundColor: 'pink'
  },

  setting: {
    flexDirection: 'row',
  },

  settingText: {
    flex: 1
  },

  settingArrow: {
    height: 10,
    width: 10
  },

// Give Feedback

  giveFeedback: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },

  sliderContainer: {
    // flexDirection: 'row'
  },

  slider: {
    maximumTrackTintColor: 'pink'
  },

  giveHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },

  giveCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  giveScore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },

  smile: {
    height: 20,
    width: 20,
  },

// Create list

  circle: {
    height: 31,
    width: 31,
  },

  sideSpacerSmall: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  RNPickerSelect: {
    color: 'blue',
    fontSize: 36,

  }
}


export default Styles
