import React from 'react'
import {
  View, StyleSheet, TouchableOpacity,
  Text, Animated
} from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { THEME_DEFAULT } from 'utils/globalStyles'
import PropTypes from 'prop-types'

const BtnAnim = Animated.createAnimatedComponent(TouchableOpacity)

class BtnReactMe extends React.PureComponent {
  constructor (props) {
    super(props)
    this.scaleAnimation = new Animated.Value(0)
  }
  onPressIn = () => {
    Animated.timing(this.scaleAnimation, {
      toValue: 1,
      duration: 100
    }).start()
  }
  onPressOut = () => {
    Animated.timing(this.scaleAnimation, {
      toValue: 0,
      duration: 100
    }).start()
  }
  render () {
    const { title, onPress, style } = this.props

    const bg = this.scaleAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['red', 'yellow']
    })
    return (
      <View style={[styles.container, style]}>
        <BtnAnim
          activeOpacity={1}
          onPressIn={() => this.onPressIn()}
          onPressOut={() => this.onPressOut()}
          onPress={() => onPress}
          style={[styles.btnView]}
        >
          <Animated.View
            style={[styles.btn, {backgroundColor: bg}]}
          >
            <IconFontAwesome name='cog' style={{ color: THEME_DEFAULT.IconColor, fontSize: 25 }} />
          </Animated.View>
        </BtnAnim>
        <Text style={styles.text}>{title}</Text>
      </View>
    )
  }
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

const BTN_WIDTH = 50

const styles = StyleSheet.create({
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
    backgroundColor: '#f7f7f7',

    shadowColor: '#ddd',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 2
  },
  btn: {
    width: BTN_WIDTH,
    height: BTN_WIDTH,
    borderRadius: BTN_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
