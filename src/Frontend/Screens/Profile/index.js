
import React, {Component} from 'react'
import {
  StyleSheet, View, SafeAreaView,
  Image, Text, TouchableOpacity
} from 'react-native'
import {
  height
} from 'utils/globalStyles'
import Images from 'assets/Images'
import BtnReactMe from 'frontend/Components/BtnReactMe'
import BtnCamera from 'frontend/Components/BtnCamera'

export default class Profile extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <View style={styles.headerBackground}>
            <View style={styles.headerRadius}/>
          </View>
          <Image source={Images.avatar} style={styles.img}/>
          <Text style={styles.name}>Võ, 29</Text>
          <Text style={styles.job}>{`IT`}</Text>
          <View style={styles.groupBtn}>
            <BtnReactMe icon='cog' title={'SETTINGS'}/>
            <BtnCamera icon='camera' style={styles.btnCenter} title={'ADD MEDIA'}/>
            <BtnReactMe icon='pencil' title={'EDIT INFO'}/>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.slide}>

          </View>
          <TouchableOpacity style={styles.btnSee}>
            <Text style={styles.btnSeeText}>SEE WHO LIKES YOU</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

Profile.defaultProps = {
}

Profile.propTypes = {
}
const IconColor = '#f5f7fa'
const styles = StyleSheet.create({
  slide: {
    width: '100%',
    height: 100,
    backgroundColor: 'gray'
  },
  btnSeeText: {
    color: '#f5c352',
    fontWeight: 'bold',
    fontSize: 16

  },
  btnSee: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    width: 260,
    borderRadius: 25,

    shadowColor: '#ccc',
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    elevation: 2
  },
  btnCenter: {
    marginTop: 40
  },
  groupBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingHorizontal: 20
  },
  job: {
    fontSize: 15,
    marginTop: 5
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  img: {
    width: height(20),
    height: height(20),
    borderRadius: height(10)
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
    height: '65%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: IconColor
  }
})
