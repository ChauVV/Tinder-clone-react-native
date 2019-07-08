
import React from 'react'
import {
  StyleSheet, View,
  Animated, Dimensions
} from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import Toggle from './Toggle'
import { THEME_DEFAULT } from 'utils/globalStyles'
import PropTypes from 'prop-types'

const IconFontAwesomeAnimated = Animated.createAnimatedComponent(IconFontAwesome)
const Width = Dimensions.get('window').width

export default class CustomTab extends React.PureComponent {
  constructor (props) {
    super(props)
    this.offset = new Animated.Value(0)
    this.props.scrollValue.addListener(this.updateView)
  }
  updateView = (offset) => {
    // offset.value | 0-1
    this.offset.setValue(-(offset.value - 1) * (Width / 2 - NAVI_BTN_SIZE + TOGGE_PADDING))
  }

  render () {
    const {goToPage, activeTab, toggleTabar} = this.props

    // Animated btn scale
    const scaleBtnLeft = this.offset.interpolate({
      inputRange: [-1 * (Width / 2 - NAVI_BTN_SIZE), 0, 1 * (Width / 2 - NAVI_BTN_SIZE)],
      outputRange: [1, 1, 1.5]
    })
    const WidthBtnCenter = this.offset.interpolate({
      inputRange: [-1 * (Width / 2 - NAVI_BTN_SIZE), 0, 1 * (Width / 2 - NAVI_BTN_SIZE)],
      outputRange: [TOGGE_WIDTH / 2, TOGGE_WIDTH + TOGGE_PADDING, TOGGE_WIDTH / 2]
    })
    const scaleBtnRight = this.offset.interpolate({
      inputRange: [-1 * (Width / 2 - NAVI_BTN_SIZE), 0, 1 * (Width / 2 - NAVI_BTN_SIZE)],
      outputRange: [1.5, 1, 1]
    })

    // Animated btn colors
    const colorBtnLeft = scaleBtnLeft.interpolate({
      inputRange: [1, 1.5],
      outputRange: [IconColor, THEME_DEFAULT.colorPink]
    })

    const colorBtnRight = scaleBtnRight.interpolate({
      inputRange: [1, 1.5],
      outputRange: [IconColor, THEME_DEFAULT.colorPink]
    })

    return (
      <View style={[styles.header]}>
        <Animated.View style={[styles.headerAnimated, {marginLeft: this.offset}]}>
          <Animated.Text
            onPress={() => goToPage(0)}
            style={[styles.Btn, { transform: [{scale: scaleBtnLeft}] }]}
          >
            <IconFontAwesomeAnimated name='user' style={{ color: colorBtnLeft, fontSize: 25 }} />
          </Animated.Text>

          <Toggle toggleTabar={toggleTabar} goToPage={goToPage} width={WidthBtnCenter} isActive={activeTab === 1}/>

          <Animated.Text
            onPress={() => goToPage(2)}
            style={[styles.Btn, {transform: [ {scale: scaleBtnRight} ]}]}
          >
            <IconFontAwesomeAnimated name='comments' style={{ color: colorBtnRight, fontSize: 25 }} />
          </Animated.Text>
        </Animated.View>
      </View>
    )
  }
}

CustomTab.defaultProps = {
  goToPage: () => {},
  toggleTabar: () => {},
  activeTab: 1,
  scrollValue: {}
}

CustomTab.propTypes = {
  goToPage: PropTypes.func,
  activeTab: PropTypes.number,
  scrollValue: PropTypes.object,
  toggleTabar: PropTypes.func
}

const NAVI_BTN_SIZE = 36
const TOGGE_WIDTH = 80
const TOGGE_PADDING = 10
const IconColor = '#e3e5e8'

const styles = StyleSheet.create({

  Btn: {
    width: NAVI_BTN_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  header: {
    width: Width
  },
  headerAnimated: {
    width: Width,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
