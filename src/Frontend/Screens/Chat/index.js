import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

class Chat extends React.PureComponent {
  render () {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Chat)

Chat.defaultProps = {
}
Chat.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
