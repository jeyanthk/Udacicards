import React, { Component } from 'react'
import { 
  KeyboardAvoidingView,
  View, 
  Text, 
  TextInput,
  StyleSheet, 
  TouchableOpacity, 
  Switch
 } from 'react-native'

 import { addCard } from '../actions'
 import { addCardToDeck } from '../utils/api'
 import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: false,
  }

  onQuestionChange = (text) => {
    this.setState({ question: text })
  }

  onAddtButton = () => {
    const { question, answer } = this.state
    if(question) {
      const deck = this.props.navigation.state.params.name
      this.props.addCard({ question, answer, deck })
      addCardToDeck(deck, { question, answer })
      this.props.navigation.goBack()
    }
  }

  handleToggleSwitch = () => {
    this.setState({ answer: !this.state.answer })
  }

  render() {
    const { text } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.enterContainer}>
          <TextInput
            placeholder='Yes or No Question'
            onChangeText={this.onQuestionChange}
            style={styles.input}/>
          <View style={styles.yesNoContainer}>
            <Text style={styles.yesNoText}>Yes or No</Text>
            <Switch
              value={this.state.answer}
              onValueChange={this.handleToggleSwitch} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={this.onAddtButton}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>   
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  enterContainer: {
    flex: 1,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yesNoContainer: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
  },
  yesNoText: {
    marginTop: 5,
    marginRight: 20,
    fontSize: 20
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 20,
    marginTop: 100,
    fontSize: 20
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    padding: 10,
    borderRadius: 7,
    height: 50,
    width: 250,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: 'purple'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
})

export default connect(null, { addCard })(AddCard)
