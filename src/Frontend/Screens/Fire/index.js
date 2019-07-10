
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
          <Card style={[styles.card, {backgroundColor: 'gray'}]}><View style={styles.ViewCard}><Text style={styles.label}>A</Text></View></Card>
          <Card style={[styles.card, {backgroundColor: 'gray'}]}><View style={styles.ViewCard}><Text style={styles.label}>B</Text></View></Card>
          <Card style={[styles.card]}><View style={styles.ViewCard}><Text style={styles.label}>C</Text></View></Card>
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
  ViewCard: {
    width: '100%',
    height: '100%'
  },
  card: {
    width: '100%',
    height: '100%'
  },
  content: {
    width: width(100),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
