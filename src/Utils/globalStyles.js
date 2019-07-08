import { Dimensions, Platform, StyleSheet } from 'react-native'

const CORE_RATIO = 667 / 375
export const MYWIDTH = Dimensions.get('window').width
export const MYHEIGHT = Dimensions.get('window').height
const DEVICE_RATIO = MYHEIGHT / MYWIDTH
const MYSCALE = CORE_RATIO / (MYHEIGHT / MYWIDTH)
const guidelineBaseHeight = 667

export const width = (num) => MYWIDTH * (num / 100)
export const height = (num) => MYHEIGHT * (num / 100)
export const verticalScale = (size) => MYHEIGHT / guidelineBaseHeight * size
export const heightScale = (num) => MYHEIGHT * (num * MYSCALE / 100)
export const scale = (num) => num * (CORE_RATIO + (CORE_RATIO - DEVICE_RATIO)) / CORE_RATIO

export const ISIOS = Platform.OS === 'ios'

export const THEME_DEFAULT = {
  // FONT
  // family
  fontRegular: 'Helvetica',
  fontBold: 'Helvetica-Bold',

  // size
  fontSizeQuestion: scale(15),
  fontSizeQuestionRadio: scale(16),
  fontSizeAnswer: scale(14),
  // COLORS
  colorPrimary: 'white', // primary color for your app, usually your brand color.
  colorAccent: 'black', // secondary color for your app which complements the primary color.
  colorBackground: '#FF7043', // background color for pages, such as lists.
  colorSurface: 'black', // background color for elements containing content, such as cards.
  colorTextRed: 'rgb(194,27,23)', // text color for content.
  colorTextTitle: 'black', // text color for title.
  colorInfo: 'black',
  colorRed: 'red',
  colorSuccess: 'green',
  colorDanger: 'rgb(174, 34, 22)',
  colorDangerLight: 'rgb(209, 113, 104)',
  colorWarning: 'yellow',
  colorDisabled: 'gray', // color for disabled elements.
  colorPlaceholder: '#d8d8d8', // color for placeholder text, such as input placeholder.
  colorLine: '#eee',
  colorResultCell: '#f2f2f2',
  colorPink: '#e95d6c',
  IconColor: '#e3e5e8',
  IconDetail: '#cfcccc'
}

const styles = StyleSheet.create({
})

export default styles
