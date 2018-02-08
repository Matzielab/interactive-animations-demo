import React, {PureComponent} from 'react'
import {Text, View, TouchableOpacity, Animated} from 'react-native'
import Button from './Button'
import styles from '../libs/CommonStyles'

type Props = {}
type State = {
  animation: Animated,
  circleState: boolean
}

export default class RegularAnimation extends PureComponent<Props, State> {
  state = {animation: new Animated.Value(1), circleState: false}

  render() {
    var {animation} = this.state
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.circle, {transform: [{scale: animation}]}]} />
        <View style={styles.buttonsWrapper}>
          <Button text='Timed animation' onPress={this.timedAnimation} />
          <Button text='Spring animation' onPress={this.springAnimation} />
        </View>
      </View>
    )
  }

  timedAnimation = () => {
    var {animation, circleState} = this.state
    Animated.timing(animation, {
      duration: 200,
      toValue: circleState ? 1 : 1.5
    }).start()
    this.setState({circleState: !circleState})
  }

  springAnimation = () => {
    var {animation, circleState} = this.state
    Animated.spring(animation, {
      bounciness: 10,
      speed: 20,
      toValue: circleState ? 1 : 1.5
    }).start()
    this.setState({circleState: !circleState})
  }
}
