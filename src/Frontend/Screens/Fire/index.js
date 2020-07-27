
import React, {Component} from 'react'
import {
  StyleSheet, SafeAreaView, Text, View
} from 'react-native'
import CardStack, { Card } from 'frontend/Components/react-native-card-stack-swiper'
import { connect } from 'react-redux'
import {
  width
} from 'utils/globalStyles'

class Fire extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container} pointerEvents="box-none">
        <CardStack style={styles.content} ref={swiper => { this.swiper = swiper }}>
          <Card style={[styles.card, {backgroundColor: 'red'}]}><Text style={styles.label}>A</Text></Card>
          <Card style={[styles.card, {backgroundColor: 'yellow'}]}><Text style={styles.label}>B</Text></Card>
          <Card style={[styles.card]}><Text style={styles.label}>C</Text></Card>
        </CardStack>
        <View style={styles.groupBtn}>

        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Fire)

Fire.defaultProps = {
}
Fire.propTypes = {
}

const styles = StyleSheet.create({
  card: {
    width: width(80),
    height: 400,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: width(100),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    height: '100%',
    width: width(100),
    justifyContent: 'center',
    alignItems: 'center'
  }
})
