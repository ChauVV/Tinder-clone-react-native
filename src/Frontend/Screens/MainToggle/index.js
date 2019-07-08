
import React from 'react'
import {
  StyleSheet, View
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Fire from 'frontend/Screens/Fire'
import Star from 'frontend/Screens/Star'

export default class MainToggle extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = ({
      currentTab: 0
    })
  }
  goToTab = (index) => {
    this.setState({currentTab: index})
  }
  render () {
    const { currentTab } = this.state

    return (
      <View style={styles.container}>
        <ScrollableTabView
          ref = {ref => { this.tabbar = ref }}
          initialPage={currentTab}
          renderTabBar={() => <View/>}
          prerenderingSiblingsNumber={1}
        >
          <Fire/>
          <Star/>
        </ScrollableTabView>
      </View>
    )
  }
}

MainToggle.defaultProps = {
}

MainToggle.propTypes = {
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e35914'
  }
})
