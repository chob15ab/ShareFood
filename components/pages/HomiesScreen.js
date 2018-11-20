import React from 'react';
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ButtonGroup, Overlay } from 'react-native-elements';
import firebase from 'firebase';



export default class HomiesScreen extends React.Component {
  static navigationOptions = {
    title: "Homies"
  };



  constructor(props) {
    super(props)
    this.state = {
      cards: ['Do', 'What', 'Makes', 'You', 'Happy', 'vi', 'har', 'mange', 'test', 'kosrt', 'fordi', 'det', 'er', 'viktig', 'og', 'kult', '🙂', '😎', '😛', 'xD', '^.^', 'O,O', ':´)'],
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
      overlayIsVisible: false,
      selectedUserTypeIndex: 0,
      selectedUserType: 'Homie'

    }
  }

  componentWillMount() {

    this.checkLoggedInUser();





  }

  checkLoggedInUser() {
    var that = this;
    var user = firebase.auth().currentUser;
    console.log(user.uid);

    firebase.database().ref('users').once('value', function (snapshot) {
      var users = snapshot.val();

      if (users[user.uid]) {


      } else {

        //FIrst time logged in
        that.setState({ overlayIsVisible: true })
    
      }


    });

  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card}</Text>
        <Image
          flex
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/sharefood-d55fd.appspot.com/o/images%2Ftest-image?alt=media&token=2ac2399f-5051-47b1-9513-c90e9b560b73' }}
        />
      </View>
    )
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false)
        })
      })
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    )
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  updateSelectedUserType(selectedIndex) {
  
    var userTypes = ['Homie', 'Restaurant'];
    this.setState({
      selectedUserTypeIndex: selectedIndex,
      selectedUserType: userTypes[selectedIndex]
    })



  }

  createUser() {
    var that = this;
    var user = firebase.auth().currentUser;
    const userType = this.state.selectedUserType;

    firebase.database().ref('/users/'+user.uid).set({
      'userId' : user.uid,
      'email': user.email,
      'userType': userType
  }).then((data)=>{
      alert("User created successfully");
      that.setState({
        overlayIsVisible: false
      })
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })

  }

  render() {
    
    
    return (

      <View style={styles.container}>


        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={this.onSwiped}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={2}

          overlayLabels={{

            left: {
              title: 'Dislike',
              style: {
                label: {
                  color: 'red',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                }
              }
            },

            right: {
              title: 'Like',
              style: {
                label: {
                  color: 'green',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }
              }
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        >
        </Swiper>
        {this.renderOverlay()}

      </View>
    )
  }




renderOverlay() {
  return (
    <Overlay
    isVisible={this.state.overlayIsVisible}
  >
      <ButtonGroup
        selectedBackgroundColor="pink"
        onPress={this.updateSelectedUserType.bind(this)}
        selectedIndex={this.state.selectedUserTypeIndex}
        buttons={['Homie', 'Restaurant']}
        containerStyle={{height: 30}} />


        <Button title="Ok" onPress={this.createUser.bind(this)}/>
  </Overlay>
)

}

}


const styles = StyleSheet.create({

  card: {
    flex: 2,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})