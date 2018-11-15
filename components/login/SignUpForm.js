import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, ActivityIndicator, Button, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({
      error: '',
      loading: true
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(this.onSignUpFailed.bind(this));
  }

  onSignUpSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    alert("User created successfully");
  }

  onSignUpFailed(err) {
    this.setState({
      loading: false,
      error: err.message
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            label='Username'
            placeholder='e-Mail'
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })} />
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
      </View>
    );
  }

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' />
    }
    return (
      <Button title="Sign up" onPress={this.onButtonPress.bind(this)}>
      </Button>
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
    fontSize: 20,
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