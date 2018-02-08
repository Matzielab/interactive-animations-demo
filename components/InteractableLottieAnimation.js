import React, {PureComponent} from 'react'
import {Text, View, TouchableOpacity, Animated} from 'react-native'
import styles from '../libs/CommonStyles'
import Interactable from 'react-native-interactable'
import LottieView from 'lottie-react-native'

type Props = {}
type State = {
  circleY: Animated
}

export default class InteractableLottieAnimation extends PureComponent<Props, State> {
  state = {circleY: new Animated.Value(0)}
  render() {
    var {circleY} = this.state
    return (
      <View style={styles.container}>
        <Interactable.View
          snapPoints={[{x: 0, y: 0}, {y: -300}, {y: 300}]}
          animatedValueY={circleY}
          style={{width: 300, height: 300}}>
            <LottieView source={require('../lottie/phonological.json')} progress={this.getInterpolatedProgress()} style={{width: 300, height: 300}} />
          </Interactable.View>
      </View>
    )
  }

  getInterpolatedProgress = () => {
    var {circleY} = this.state
    return circleY.interpolate({
      inputRange: [-300, 0, 300],
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp'
    })
  }
}
