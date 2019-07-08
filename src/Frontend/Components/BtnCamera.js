import React from 'react'
import {
  View, StyleSheet, TouchableOpacity,
  Text, Animated
} from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { THEME_DEFAULT } from 'utils/globalStyles'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'

const BtnAnim = Animated.createAnimatedComponent(TouchableOpacity)
const BtnReactMe = ({title, onPress, style, icon = 'cog'}) => {
  return (
    <View style={[styles.container, style]}>
      <BtnAnim
        onPress={() => onPress}
        style={[styles.btnView]}
      >
        <LinearGradient colors={['#f56852', 'red', 'red']} style={styles.linearGradient}>
          <IconFontAwesome name={icon} style={{ color: THEME_DEFAULT.IconColor, fontSize: 30 }} />
        </LinearGradient>
        <View style={styles.plusView}>
          <IconFontAwesome name={'plus'} style={{ color: 'red', fontSize: 12 }} />
        </View>
      </BtnAnim>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default BtnReactMe

BtnReactMe.defaultProps = {
  title: 'TITLE',
  onPress: () => {},
  style: {}
}

BtnReactMe.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object
}

const BTN_WIDTH = 60

const styles = StyleSheet.create({
  linearGradient: {
    width: BTN_WIDTH,
    height: BTN_WIDTH,
    borderRadius: BTN_WIDTH / 2,
    backgroundColor: 'red',

    justifyContent: 'center',
    alignItems: 'center'
  },
  plusView: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: -2,
    right: -5,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#ddd',
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    elevation: 2
  },
  text: {
    color: THEME_DEFAULT.colorPlaceholder,
    marginTop: 10,
    fontWeight: '600',
    fontSize: 13
  },
  btnView: {

    width: BTN_WIDTH,
    height: BTN_WIDTH,
    borderRadius: BTN_WIDTH / 2,
    backgroundColor: 'red',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#ddd',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 2
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
