import React, {PureComponent} from 'react'
import {Text, View, TouchableOpacity, Animated} from 'react-native'
import Button from './Button'
import styles from '../libs/CommonStyles'
import LottieView from 'lottie-react-native'

type Props = {}
type State = {
  animation: Animated
}

export default class LottieAnimation extends PureComponent<Props, State> {
  state = {animation: new Animated.Value(0)}

  render() {
    var {animation} = this.state
    return (
      <View style={styles.container}>
        <View style={{width: 300, height: 300}}>
          <LottieView source={require('../lottie/phonological.json')} progress={animation} style={{width: 300, height: 300}} />
        </View>
        <View style={styles.buttonsWrapper}>
          <Button text='Timed animation' onPress={this.timedAnimation} />
          <Button text='Spring animation' onPress={this.springAnimation} />
        </View>
      </View>
    )
  }

  timedAnimation = () => {
    var {animation} = this.state
    Animated.timing(animation, {
      duration: 5000,
      toValue: 1
    }).start(this.resetAnimations)
  }

  springAnimation = () => {
    var {animation} = this.state
    Animated.spring(animation, {
      bounciness: 5000,
      speed: 1,
      toValue: 1
    }).start(this.resetAnimations)
  }

  resetAnimations = () => {
    var {animation} = this.state
    this.setState({animation: new Animated.Value(0)})
  }
}
