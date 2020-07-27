
import React from 'react'
import {
  StyleSheet, View, SafeAreaView,
  Image, Text, TouchableOpacity
} from 'react-native'
import {
  height, width, THEME_DEFAULT
} from 'utils/globalStyles'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Images from 'assets/Images'
import BtnReactMe from 'frontend/Components/BtnReactMe'
import BtnCamera from 'frontend/Components/BtnCamera'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

const dataSlide = [
  {
    title: '36 People Like You',
    icon: 'google-plus-square',
    iconColor: '#f5c352',
    descriptions: 'See them now with Tinder Gold',
    btnTitle: 'SEE WHO LIKES YOU',
    btnTextColor: '#f5c352',
    btnAction: () => console.log('btnAction')
  },
  {
    title: 'Control Your Profile',
    icon: 'key',
    iconColor: 'red',
    descriptions: 'Limit what others see with Tinder Plus',
    btnTitle: 'MY TINDER PLUS',
    btnTextColor: 'red',
    btnAction: () => console.log('btnAction')
  },
  {
    title: 'Swipe Around the World',
    icon: 'map-marker',
    iconColor: 'blue',
    descriptions: 'Passport to anywhere with Tinder Plus',
    btnTitle: 'MY TINDER PLUS',
    btnTextColor: 'blue',
    btnAction: () => console.log('btnAction')
  },
  {
    title: 'Get Matches Faster',
    icon: 'bolt',
    iconColor: '#8e52f5',
    descriptions: 'Boost your fprofile once a month!',
    btnTitle: 'MY TINDER PLUS',
    btnTextColor: '#8e52f5',
    btnAction: () => console.log('btnAction')
  }]

const renderCardItem = ({item}) => {
  return (
    <View style={styles.slideItem}>
      <View style={styles.itemLine1}>
        <IconFontAwesome name={item.icon} style={{ color: item.iconColor, fontSize: 20 }} />
        <Text style={styles.textItem}>{item.title}</Text>
      </View>
      <Text style={styles.textItemSmall}>{item.descriptions}</Text>
    </View>
  )
}

const HeaderProfile = ({children}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerBackground}>
        <View style={styles.headerRadius}/>
      </View>
      {children}
    </View>
  )
}
class Profile extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = ({
      activeDot: 0
    })
  }
  handleSnapToItem = (index) => {
    this.setState({ activeDot: index })
  }
  render () {
    const { activeDot } = this.state

    return (
      <SafeAreaView style={styles.container} >
        <HeaderProfile>
          <Image source={Images.avatar} style={styles.img}/>
          <Text style={styles.name}>Võ, 29</Text>
          <Text style={styles.job}>{`Information Technology`}</Text>
          <View style={styles.groupBtn}>
            <BtnReactMe icon='cog' title={'SETTINGS'}/>
            <BtnCamera icon='camera' style={styles.btnCenter} title={'ADD MEDIA'}/>
            <BtnReactMe icon='pencil' title={'EDIT INFO'}/>
          </View>
        </HeaderProfile>
        <View style={styles.bottom}>
          <View style={styles.slide}>
            <Carousel
              data={dataSlide}
              renderItem={renderCardItem}
              sliderWidth={width(100)}
              itemWidth={width(100)}
              onSnapToItem={this.handleSnapToItem}
              autoplay={true}
              loop={true}
              autoplayDelay={0}
              autoplayInterval={2000}
            />
            <Pagination
              dotsLength={dataSlide.length}
              activeDotIndex={activeDot}
              containerStyle={styles.paginationStyle}
              dotStyle={[styles.dotStyle, {backgroundColor: dataSlide[activeDot].iconColor}]}
              inactiveDotStyle={styles.inactiveDotStyle}
              inactiveDotOpacity={0.5}
              inactiveDotScale={1.2}
            />
          </View>
          <TouchableOpacity style={styles.btnSee} onPress={() => dataSlide[activeDot].btnAction()}>
            <Text style={[styles.btnSeeText, {color: dataSlide[activeDot].btnTextColor}]}>{dataSlide[activeDot].btnTitle}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Profile)

Profile.defaultProps = {
}
Profile.propTypes = {
}

const IconColor = '#f5f7fa'
const styles = StyleSheet.create({
  textItemSmall: {
    fontWeight: '400',
    fontSize: 16,
    marginTop: 15
  },
  textItem: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5
  },
  itemLine1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideItem: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    paddingTop: 10
  },
  inactiveDotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: THEME_DEFAULT.colorPlaceholder
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f5c352'
  },
  paginationStyle: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    bottom: -20
  },
  slide: {
    width: '100%',
    height: 100,
    marginBottom: 10
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
