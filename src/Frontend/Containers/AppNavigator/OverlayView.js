
import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View, Text, Animated
} from 'react-native'
import { connect } from 'react-redux'
import { THEME_DEFAULT, height, scale } from 'utils/globalStyles'
import PropTypes from 'prop-types'
import SpinnerKit from 'react-native-spinkit'

class OverlayView extends PureComponent {
  state={
    animatedValue: new Animated.Value(0)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.prompt.isShow !== this.props.prompt.isShow) {
      Animated.sequence([
        Animated.timing(this.state.animatedValue, {
          toValue: 1,
          duration: 500
        }),
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 500,
          delay: 2000
        })
      ]).start()
    }
  }
  render () {
    const {
      internet, appStatus, prompt
    } = this.props
    const { animatedValue } = this.state

    return (
      <View style={styles.container}
        pointerEvents="box-none"
      >
        {!internet &&
          <View style={styles.internet} pointerEvents="none">
            <View style={styles.internetDot}/>
            <Text style={styles.overlayText}>OFFLINE</Text>
          </View>
        }
        {
          (appStatus.isLoading) &&
          <View style={styles.overlay}>
            <View style={styles.overlayFrame}>
              <Text style={styles.overlayText}>ĐANG XỬ LÝ</Text>
              <SpinnerKit style={styles.loadingSpinner}
                size={40} type={'ThreeBounce'} />
            </View>
          </View>
        }
        {
          <View style={styles.promtView} pointerEvents="none">
            <Animated.View style={[{ opacity: animatedValue }]}>
              <View style={styles.promt} pointerEvents="none">
                <Text numberOfLines={2} style={styles.overlayText}>{prompt.message}</Text>
              </View>
            </Animated.View>
          </View>
        }
      </View >
    )
  }
}

const mapStateToProps = (state) => ({
  internet: state.internet,
  appStatus: state.appStatus,
  prompt: state.prompt
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(OverlayView)

OverlayView.defaultProps = {
  prompt: {}
}

OverlayView.propTypes = {
  notification: PropTypes.any,
  offNotification: PropTypes.func,
  prompt: PropTypes.object
}

const styles = StyleSheet.create({
  loadingSpinner: {
    color: 'white'
  },
  overlayFrame: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_DEFAULT.colorDanger,
    borderRadius: 10
  },
  overlay: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 500,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  },
  promtView: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    width: '100%',
    bottom: height(3),
    paddingHorizontal: scale(20)
  },
  promt: {
    flexDirection: 'row',
    paddingHorizontal: height(2),
    paddingVertical: height(1),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: height(2)
  },
  internet: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: height(3),
    left: height(7),
    paddingHorizontal: height(2),
    paddingVertical: height(1),
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: height(2)
  },
  internetDot: {
    backgroundColor: THEME_DEFAULT.colorDanger,
    width: height(5),
    height: height(5),
    borderRadius: height(2.5),
    marginRight: height(2)
  },
  overlayText: {
    color: THEME_DEFAULT.colorPrimary,
    fontFamily: THEME_DEFAULT.fontGame,
    fontSize: height(2),
    marginBottom: 0
  }
})
