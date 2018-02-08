import React, {PureComponent} from 'react'
import {Platform, Text, View} from 'react-native'
import RegularAnimation from './components/RegularAnimation'
import InterpolatedAnimation from './components/InterpolatedAnimation'
import InterpolatedSpecialAnimation from './components/InterpolatedSpecialAnimation'
import InteractableAnimation from './components/InteractableAnimation'
import InteractableDrawerAnimation from './components/InteractableDrawerAnimation'
import LottieAnimation from './components/LottieAnimation'
import InteractableLottieAnimation from './components/InteractableLottieAnimation'
import Swiper from 'react-native-swiper'

export default class App extends PureComponent<{}> {
  render() {
    return (
      <Swiper loop={false}>
        <RegularAnimation />
        <InterpolatedAnimation />
        <InterpolatedSpecialAnimation />
        <InteractableAnimation />
        <InteractableDrawerAnimation />
        <LottieAnimation />
        <InteractableLottieAnimation />
      </Swiper>
    )
  }
}
