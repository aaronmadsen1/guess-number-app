import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../constants/colors'
import TitleText from '../components/TitleText'

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.clouds.c00,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: Colors.clouds.c7
  }
})

export default Header
