
import React, {Component} from 'react'
import {
  StyleSheet, SafeAreaView
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import CustomTab from 'frontend/Components/CustomTab'
import Profile from 'frontend/Screens/Profile'
// import PropTypes from 'prop-types'
import MainToggle from 'frontend/Screens/MainToggle'
import Chat from 'frontend/Screens/Chat'

export default class ReactMe extends Component {
  goToPage = (index) => {
    this.tabbar.goToPage(index)
  }
  toggleTabar = (index) => {
    this.refs.MainToggle.goToTab(index)
  }
  render () {
    return (
      <SafeAreaView style={styles.container} >
        <ScrollableTabView
          ref = {ref => { this.tabbar = ref }}
          initialPage={1}
          renderTabBar={() => <CustomTab toggleTabar={this.toggleTabar}/>}
          prerenderingSiblingsNumber={1}
        >
          <Profile/>
          <MainToggle ref={'MainToggle'}/>
          <Chat/>
        </ScrollableTabView>
      </SafeAreaView>
    )
  }
}

ReactMe.defaultProps = {
}

ReactMe.propTypes = {
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
