
import React, {Component} from 'react'
import {
  StyleSheet, View
} from 'react-native'
// import {
//   height
// } from 'utils/globalStyles'

export default class Fire extends Component {
  render () {
    return (
      <View style={styles.container}/>
    )
  }
}

Fire.defaultProps = {
}

Fire.propTypes = {
}
const IconColor = '#f5f7fa'
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: IconColor
  }
})
