import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, Text,
  View, ViewPropTypes,
  Image, FlatList, TouchableOpacity
} from 'react-native'
import Images from 'assets/Images'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { THEME_DEFAULT, height, ISIOS, scale } from 'utils/globalStyles'
import { icContact } from 'utils/globalIcons'
import { RouteKey, actionsType } from 'utils/globalConstants'

const ICON_MENU_HEIGHT = height(20)

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string
  }

  static contextTypes = {
    drawer: PropTypes.object
  }

  onPressMenu (item) {
    const { openContact, updateQuestions } = this.props

    this.props.navigation.toggleDrawer()

    switch (item.id) {
    case 0: {
      openContact()
      break
    }
    case 1: {
      updateQuestions()
      break
    }
    }
  }
  _renderMenuItem = (cell) => {
    const item = cell.item
    const index = cell.index

    return (
      <TouchableOpacity style={[styles.menuItem, index === 0 && styles.firstRow]}
        onPress={() => this.onPressMenu(item)}>
        {/* <Text style={styles.textIcon}> */}
        {item.icon}
        {/* </Text> */}
        <Text style={styles.menuItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  render () {
    const LIST_MENU = [
      { id: 0, title: 'LIÊN HỆ', icon: icContact('gray') },
      { id: 1, title: 'CẬP NHẬT', icon: <Image style={{width: 32, height: 32}} source={Images.icUpdate}/> }
    ]
    return (
      <View style={[styles.container]}>
        <View style={[styles.menuHeader]}>
          <Text style={styles.menuTextHeader}>Menu</Text>
        </View>
        <View style={styles.menuIconContainer}>
          <Image style={styles.menuIcon} source={Images.generaliIcon}/>
        </View>
        <FlatList
          data={LIST_MENU}
          keyExtractor={(_, index) => index.toString()}
          renderItem={this._renderMenuItem}
        />
        <View style={styles.versionView}>
          <Text style={styles.versionText}>Phiên Bản: 1.0.0</Text>
        </View>
      </View >
    )
  }
}
const mapActionsToProps = (dispatch) => ({
  openContact: () => dispatch({ type: 'push', routeName: RouteKey.Contact }),
  updateQuestions: () => dispatch({ type: actionsType.UPDATE_QUESTIONS })
})
export default connect((state) => ({}), mapActionsToProps)(DrawerContent)
const styles = StyleSheet.create({
  versionText: {
    color: THEME_DEFAULT.colorTextRed,
    fontFamily: THEME_DEFAULT.fontRegular,
    fontSize: 12
  },
  versionView: {
    position: 'absolute',
    bottom: 3,
    right: 10
  },
  container: {
    flex: 1
  },
  menuIcon: {
    width: ICON_MENU_HEIGHT,
    height: ICON_MENU_HEIGHT,
    resizeMode: 'contain'
  },
  menuTextHeader: {
    fontFamily: THEME_DEFAULT.fontRegular,
    color: 'white',
    fontSize: 20
  },
  menuHeader: {
    height: ISIOS ? isIphoneX() ? 90 : 80 : 50,
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    backgroundColor: '#ba2014',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuIconContainer: {
    height: ICON_MENU_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  menuItem: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderColor: 'rgb(169, 178, 184)'
  },
  menuItemTitle: {
    color: '#3b3c3d',
    fontFamily: THEME_DEFAULT.fontRegular,
    marginLeft: scale(10)
  },
  firstRow: {
    borderTopWidth: 0.5
  }
})
