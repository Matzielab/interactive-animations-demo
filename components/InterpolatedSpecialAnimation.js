import React, {PureComponent} from 'react'
import {Text, View, TouchableOpacity, Animated} from 'react-native'
import styles from '../libs/CommonStyles'
import Button from './Button'

type Props = {}
type State = {
  animation: Animated,
  circleState: boolean
}

const SCALE_MIN = 1
const SCALE_MAX = 1.5

export default class InterpolatedSpecialAnimation extends PureComponent<Props, State> {
  state = {animation: new Animated.Value(SCALE_MIN), circleState: false}

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.square, this.getAnimatedStyle()]} />
        <View style={styles.buttonsWrapper}>
          <Button text='animate' onPress={this.springAnimation} />
        </View>
      </View>
    )
  }

  springAnimation = () => {
    var {animation, circleState} = this.state
    Animated.spring(animation, {
      bounciness: 10,
      speed: 20,
      toValue: circleState ? SCALE_MIN : SCALE_MAX
    }).start()
    this.setState({circleState: !circleState})
  }

  getAnimatedStyle = () => {
    var {animation} = this.state
    return {
      transform: [
        {scale: animation},
        {rotate: this.getInterpolatedDeg()}
      ],
      backgroundColor: this.getInterpolatedColor()}
  }

  getInterpolatedDeg = () => {
    var {animation} = this.state
    return animation.interpolate({
      inputRange: [SCALE_MIN, SCALE_MAX],
      outputRange: ['0deg', '45deg']
    })
  }

  getInterpolatedColor = () => {
    var {animation} = this.state
    return animation.interpolate({
      inputRange: [SCALE_MIN, SCALE_MAX],
      outputRange: ['rgb(6, 160, 220)', 'rgb(60, 186, 84)']
    })
  }
}
