import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

class Star extends React.PureComponent {
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
export default connect(mapStateToProps, mapactionsTypeToProps)(Star)

Star.defaultProps = {
}
Star.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen'
  }
})
