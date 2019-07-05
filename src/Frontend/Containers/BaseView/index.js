
import React, { PureComponent } from 'react'
import {
  StatusBar, StyleSheet, Text,
  View
} from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { connect } from 'react-redux'
import { THEME_DEFAULT, ISIOS, scale } from 'utils/globalStyles'
import PropTypes from 'prop-types'
import XButton from 'frontend/Components/XButton'

class BaseView extends PureComponent {
  static defaultProps = {
    isHeader: false
  }

  render () {
    const {
      isHeader,
      title,
      leftIcon,
      leftAction,
      rightIcon,
      rightAction,
      time,
      footer,
      isFooter
    } = this.props

    return (
      <View style={styles.base}>
        <StatusBar barStyle='light-content' backgroundColor={THEME_DEFAULT.colorTextRed} />
        {isHeader &&
          <View style={styles.header}>
            {leftIcon &&
              <XButton style={styles.leftIcon}
                onPress={leftAction}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                {leftIcon}
              </XButton>
            }
            <View style={styles.titleContainer}>
              <Text numberOfLines={time ? 1 : 2} style={styles.textHeader}>{title}</Text>
              {time && <Text numberOfLines={1} style={styles.textTimer}>{time}</Text>}
            </View>
            {rightIcon &&
              <View style={styles.groubBtnRight}>
                <XButton onPress={rightAction}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                  {rightIcon}
                </XButton>
              </View>
            }
          </View>
        }
        <View style={styles.base}>
          {this.props.children}
        </View>
        {(isFooter || footer)
          ? (footer && footer) ||
            <View style={styles.ViewCopyright}>
              <Text style={styles.copyright}>{`©2019 Bản quyền thuộc về Generali Việt Nam`}</Text>
            </View>
          : <View/>
        }
      </View >
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(BaseView)
BaseView.defaultProps = {
  children: null,
  isHeader: false,
  title: '',
  leftIcon: null,
  leftAction: () => {},
  rightIcon: null,
  rightAction: () => {},
  isLoading: false,
  isTimer: false
}

BaseView.propTypes = {
  children: PropTypes.any,
  isHeader: PropTypes.bool,
  title: PropTypes.string,
  leftIcon: PropTypes.any,
  leftAction: PropTypes.func,
  rightIcon: PropTypes.any,
  rightAction: PropTypes.func,
  isLoading: PropTypes.bool,
  isTimer: PropTypes.bool
}

const styles = StyleSheet.create({
  ViewCopyright: {
    marginBottom: scale(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  copyright: {
    fontFamily: THEME_DEFAULT.fontRegular,
    fontSize: scale(12),
    paddingVertical: scale(1),
    color: THEME_DEFAULT.colorRed
  },
  base: {
    flex: 1,
    backgroundColor: 'white'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%'
  },
  header: {
    height: ISIOS ? isIphoneX() ? 90 : 80 : 50,
    backgroundColor: THEME_DEFAULT.colorTextRed,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0
  },
  textTimer: {
    fontSize: scale(13),
    paddingVertical: scale(1),
    fontFamily: THEME_DEFAULT.fontRegular,
    color: 'white',
    textAlign: 'center'
  },
  textHeader: {
    fontSize: scale(15),
    paddingVertical: scale(3),
    fontFamily: THEME_DEFAULT.fontBold,
    color: 'white',
    textAlign: 'center'
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
    width: 60,
    height: '100%',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    justifyContent: 'center'
  },
  groubBtnRight: {
    position: 'absolute',
    right: 20,
    height: '100%',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
