const Styles = {
/** Screen Styles **/
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F9FBFF'
  },

  header : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 25,
    paddingTop: 10
  },

  backHeader : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingTop: 25
  },

  profileHeader : {
    flex: 2,
  },

  profileTop: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingTop: 5
  },

  profileBottom: {
    flex:2,
  },

  profileBody: {
    flex: 4,
    flexDirection: 'column',
    justifyContent:'center',
    padding: 15,
  },

  cornerRight: {
    flexDirection:'column',
  },

  cornerLeft: {
    flexDirection:'column',
  },

  body : {
    flex: 8,
    flexDirection: 'column',
    padding:20,
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

  send:{
    height: 50,
    width: 50
  },

  hr: {
    borderTopWidth: 1,
    borderTopColor: 'white',
  },

  card:{
    width: 165,
    height: 60,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    shadowOffset:{  width: 4,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: .08
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
    color: 'white',
    fontSize: 28,
    fontFamily: 'Avenir-Black',
    paddingBottom: 20
  },

  h1black: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'Avenir-Black',
    paddingBottom: 20
  },

  h2: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Avenir',
    paddingBottom: 10
  },

  h3: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Avenir-Black',
    paddingBottom: 10
  },

  highlight: {
    fontWeight: '700',
    fontFamily: 'Avenir'
  },

  pCenter: {
    paddingBottom: 20,
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
  },

  pCenterBlack: {
    paddingBottom: 20,
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
  },

  buttonText: {
    color: '#4E70BD',
    fontFamily: 'Avenir-Black',
    fontSize: 22,
  },

  link:{
    textDecorationLine: 'underline',
    color: '#E0FF4F',
    fontFamily: 'Avenir-Heavy',
    fontSize: 14,
  },

  buttonBox: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    height: 50,
    width: 200,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset:{  width: 4,  height: 4,  },
    shadowColor: 'black',
    shadowOpacity: .2,
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
    // borderTopWidth: 1/2,
    // borderTopColor: 'white',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  navItem: {
    flex: 1,
    height: 50,
    // borderRightWidth: 1,
    // backgroundColor: '#4E70BD',
    // borderRightColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  navIcon: {
    // flex: 1,
    width: 70,
    height: 70
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
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 50
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
    color: 'black',
    fontSize: 16,
    fontFamily: 'AvenirNext-Medium',
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
    height: 140,
    width: 140,
    borderRadius: 100/2,
    // shadowRadius:100/2,
    shadowOffset: { width: 3, height: 3},
    shadowColor: 'black',
    shadowOpacity: .09
  },

  headerIcons: {
    height: 80,
    width: 80,
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
    // backgroundColor: 'pink'
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
    fontFamily: 'Avenir'

  }
}


export default Styles
