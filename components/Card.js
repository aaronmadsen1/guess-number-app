import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black', // shadow ios only
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6, // android only
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 6
  }
})

export default Card
