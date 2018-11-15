import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, TextInput, View, Button, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './SignUpForm';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
      hasLogin: true
    };
  }

  signIn() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', loading: false, error: '' });
  }

  onLoginFail(err) {
    this.setState({ loading: false, error: err.message });
  }


  render() {
    switch(this.state.hasLogin) {
      case true: 
      return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            label='Username'
            placeholder='Email'
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}/>
           </View>

          <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder='Password'
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}/>
            </View>
  
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
  
          {this.renderButton()}
          <TouchableHighlight style={[styles.buttonContainer, styles.buttonColor]} onPress={() => this.setState({hasLogin : false})}>
      <Text>Sign up</Text>
  </TouchableHighlight>
        </View>
      );
      case false: {
        return(
          <View style={styles.container}> {/* Hvorfor i alle dager setter jeg Style her for signup form?? og hvorfor skal jeg ha brackets({}) for å kommentere??*/}
          <SignUpForm/> 
          <Button title='Go back' onPress = {() => this.setState({hasLogin:true})}></Button>
          </View>
        )
      }  
    }
  }
  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' />
    }
    return (
      <TouchableHighlight style={[styles.buttonContainer, styles.buttonColor]} onPress={() => this.signIn.bind(this)('Log in')}>
      <Text>Log in</Text>
  </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
},
inputs:{
  height:45,
  marginLeft:16,
  borderBottomColor: '#FFFFFF',
  flex:1,
},

inputIcon:{
  width:30,
  height:30,
  marginLeft:15,
  justifyContent: 'center'
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:250,
  borderRadius:30,
},
buttonColor: {
  backgroundColor: "#00b5ec",
}
});