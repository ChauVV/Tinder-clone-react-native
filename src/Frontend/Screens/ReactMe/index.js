
import React, {Component} from 'react'
import {
  StyleSheet, SafeAreaView
} from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import CustomTab from 'frontend/Components/CustomTab'
import Profile from 'frontend/Screens/Profile'
// import PropTypes from 'prop-types'
import MainToggle from 'frontend/Screens/MainToggle'
import Chat from 'frontend/Screens/Chat'

class ReactMe extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      currentPage: 1
    })
  }
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
          renderTabBar={() => <CustomTab goToPage={this.goToPage} toggleTabar={this.toggleTabar}/>}
          prerenderingSiblingsNumber={1}
          locked={this.state.currentPage === 1}
          onChangeTab={({i}) => this.setState({currentPage: i})}
        >
          <Profile/>
          <MainToggle ref={'MainToggle'}/>
          <Chat/>
        </ScrollableTabView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(ReactMe)

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
