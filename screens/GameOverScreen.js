import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>GAME OVER!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://ichef.bbci.co.uk/news/660/cpsprodpb/10869/production/_107098676_1c45dac3-bf7e-4663-bdec-099ec9d8e199.jpg'
          // }}
          style={styles.image}
          resizeMode="cover" //default
        />
      </View>
      <View style={styles.resultsContainer}>
        <BodyText style={styles.resultsText}>
          Your phone needed
          <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}> {props.userNumber}.</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game!</MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultsContainer: {
    marginHorizontal: 50,
    marginVertical: 15
  },
  resultsText: {
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
})

export default GameOverScreen
