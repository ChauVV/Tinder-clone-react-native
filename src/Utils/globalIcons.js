
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { THEME_DEFAULT } from 'utils/globalStyles'

export const icBar = (color, size) => { return <IconFontAwesome name='bars' style={{ color: color || 'white', fontSize: size || 22 }} /> }
export const icBook = (color) => { return <IconFontAwesome name='book' style={{ color: color || 'white', fontSize: 25 }} /> }
export const icTopic = (color) => { return <IconFontAwesome name='list-alt' style={{ color: color || 'white', fontSize: 25 }} /> }
export const icTest = (color) => { return <IconFontAwesome name='edit' style={{ color: color || 'white', fontSize: 25 }} /> }
export const icContact = (color) => { return <IconFontAwesome name='address-card' style={{ color: color || 'white', fontSize: 25 }} /> }
export const icUpdate = (color) => { return <IconFontAwesome name='retweet' style={{ color: color || 'white', fontSize: 25 }} /> }
export const icBack = (color, size) => { return <IconFontAwesome name='chevron-left' style={{ color: color || 'white', fontSize: size || 22 }} /> }
export const icNext = (color, size) => { return <IconFontAwesome name='chevron-right' style={{ color: color || 'white', fontSize: size || 22 }} /> }
export const icQuestion = (color, size) => { return <IconFontAwesome name='question-circle' style={{ color: color || 'white', fontSize: size || 25 }} /> }
export const icNextCircle = (color, size) => { return <IconFontAwesome name='angle-right' style={{ color: color || 'white', fontSize: size || 25 }} /> }
export const icBackCircle = (color, size) => { return <IconFontAwesome name='angle-left' style={{ color: color || 'white', fontSize: size || 25 }} /> }
export const icCurrect = (color, size) => { return <IconFontAwesome name='check-circle' style={{ color: color || 'green', fontSize: size || 28 }} /> }
export const icInCurrect = (color, size) => { return <IconFontAwesome name='times-circle' style={{ color: color || THEME_DEFAULT.colorTextRed, fontSize: size || 28 }} /> }
export const icWarning = (color, size) => { return <IconFontAwesome name='exclamation-circle' style={{ color: color || '#fcca35', fontSize: size || 28 }} /> }

export const icPhone = (color, size) => { return <IconFontAwesome name='phone' style={{ color: color || '#fcca35', fontSize: size || 25 }} /> }
export const icPhoneOffice = (color, size) => { return <IconFontAwesome name='phone-square' style={{ color: color || '#fcca35', fontSize: size || 25 }} /> }
export const icEmail = (color, size) => { return <IconFontAwesome name='envelope' style={{ color: color || '#fcca35', fontSize: size || 25 }} /> }
export const icService = (color, size) => { return <IconFontAwesome name='users' style={{ color: color || '#fcca35', fontSize: size || 25 }} /> }
export const icFacebook = (color, size) => { return <IconFontAwesome name='facebook-square' style={{ color: color || '#fcca35', fontSize: size || 25 }} /> }
export const icMap = (color, size) => { return <IconFontAwesome name='map' style={{ color: color || '#fcca35', fontSize: size || 25 }} /> }
export const icFax = (color, size) => { return <IconFontAwesome name='fax' style={{ color: color || '#fcca35', fontSize: size || 25 }} /> }
