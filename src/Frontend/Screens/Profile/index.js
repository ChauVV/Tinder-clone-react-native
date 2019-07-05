
import React, {Component} from 'react'
import {
  StyleSheet, View, SafeAreaView,
  Image, Text
} from 'react-native'
import {
  height
} from 'utils/globalStyles'
import Images from 'assets/Images'
import BtnReactMe from 'frontend/Components/BtnReactMe'
import BtnCamera from 'frontend/Components/BtnCamera'

export default class Profile extends Component {
  goToPage = (index) => {
    this.tabbar.goToPage(index)
  }
  render () {
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <View style={styles.headerBackground}>
            <View style={styles.headerRadius}/>
          </View>
          <Image source={Images.avatar} style={styles.img}/>
          <Text style={styles.name}>Võ, 29</Text>
          <View style={styles.groupBtn}>
            <BtnReactMe title={'SETTINGS'}/>
            <BtnCamera style={styles.btnCenter}/>
            <BtnReactMe title={'EDIT INFO'}/>
          </View>
        </View>
        <View style={styles.bottom}>

        </View>
      </SafeAreaView>
    )
  }
}

const IconColor = '#f5f7fa'
const styles = StyleSheet.create({
  btnCenter: {
    marginTop: 35
  },
  groupBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  img: {
    width: height(24),
    height: height(24),
    borderRadius: height(12),
    marginTop: 20
  },
  headerRadius: {
    position: 'absolute',
    width: height(200),
    height: height(200),
    borderRadius: height(100),
    backgroundColor: 'white',
    bottom: 0,

    shadowColor: '#eee',
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    elevation: 2
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute'
  },
  header: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    height: '30%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: IconColor
  }
})
