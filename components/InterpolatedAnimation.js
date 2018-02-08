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

export default class InterpolatedAnimation extends PureComponent<Props, State> {
  state = {animation: new Animated.Value(SCALE_MIN), circleState: false}

  render() {
    var {animation} = this.state
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.circle, {transform: [{scale: animation}], opacity: this.getInterpolatedStyle()}]} />
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

  getInterpolatedStyle = () => {
    var {animation} = this.state
    return animation.interpolate({
      inputRange: [SCALE_MIN, SCALE_MAX],
      outputRange: [0.5, 1]
    })
  }
}
