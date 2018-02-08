import React, {PureComponent} from 'react'
import {Text, View, TouchableOpacity, Animated} from 'react-native'
import styles from '../libs/CommonStyles'
import {width} from '../libs/Dimensions'
import Interactable from 'react-native-interactable'

type Props = {}
type State = {
  drawerX: Animated
}

export default class InteractableDrawerAnimation extends PureComponent<Props, State> {
  state = {drawerX: new Animated.Value(0)}

  render() {
    var {drawerX} = this.state
    return (
      <View style={styles.container}>
        <View style={[styles.bar, {backgroundColor: '#0377A3', justifyContent: 'center'}]}>
          <Animated.View style={[styles.tinyCircle, {position: 'absolute', right: 10, transform: [{scale: this.getInterpolatedScale()}], backgroundColor: this.getInterpolatedColor()}]} />
          <Interactable.View
            horizontalOnly
            snapPoints={[{x: 0}, {x: -(width / 2)}]}
            animatedValueX={drawerX}
            style={styles.bar} />
          </View>
      </View>
    )
  }

  getInterpolatedScale = () => {
    var {drawerX} = this.state
    return drawerX.interpolate({
      inputRange: [-(width / 2), 0],
      outputRange: [1, 0.3],
      extrapolate: 'clamp'
    })
  }

  getInterpolatedColor = () => {
    var {drawerX} = this.state
    return drawerX.interpolate({
      inputRange: [-(width / 2), 0],
      outputRange: ['rgb(255, 44, 0)', 'rgb(0, 0, 0)']
    })
  }
}
