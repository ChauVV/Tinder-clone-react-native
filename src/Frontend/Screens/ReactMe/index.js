
import React, {Component} from 'react'
import {
  StyleSheet, View, SafeAreaView
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import CustomTab from 'frontend/Components/CustomTab'

export default class App extends Component {
  goToPage = (index) => {
    this.tabbar.goToPage(index)
  }
  render () {
    return (
      <SafeAreaView style={styles.container} >
        <ScrollableTabView
          ref = {ref => { this.tabbar = ref }}
          initialPage={1}
          renderTabBar={() => <CustomTab/>}
          prerenderingSiblingsNumber={1}
        >
          <Profile/>
          <Main/>
          <Chat/>
        </ScrollableTabView>
      </SafeAreaView>
    )
  }
}

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fcca35'}}/>
  )
}
const Main = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#e35914'}}/>
  )
}
const Chat = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'lightgreen'}}/>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
