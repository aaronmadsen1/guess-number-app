import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import DefSty from '../constants/defaultStyles'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number :'(", 'Enter a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ])
      return
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={{ color: Colors.clouds.c9 }}>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game!
        </MainButton>
      </Card>
    )
    // MY ALERT
    // Alert.alert(
    //   'You have chosen ' + selectedNumber + '!',
    //   'Are you ready to start the game?',
    //   [
    //     { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
    //     { text: 'Cancel', style: 'destructive', onPress: resetInputHandler }
    //   ]
    // )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={{ ...DefSty.tt, ...styles.title }}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={DefSty.bt}>Select a Number!</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                style={styles.buttonText}
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.clouds.c5}
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.buttonText}
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.clouds.c2}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.clouds.c0
  },
  title: {
    marginVertical: 10,
    fontSize: 30,
    color: Colors.clouds.c6
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: Colors.clouds.c4
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 95
  },
  buttonText: {
    color: Colors.clouds.c1
  },
  input: {
    width: 50,
    textAlign: 'center',
    color: 'white'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
})

export default StartGameScreen
