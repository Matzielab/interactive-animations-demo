import React, {PureComponent} from 'react'
import {Text, View, TouchableOpacity, Animated} from 'react-native'
import styles from '../libs/CommonStyles'
import Interactable from 'react-native-interactable'

type Props = {}
type State = {}

export default class InteractableAnimation extends PureComponent<Props, State> {

  render() {
    return (
      <View style={styles.container}>
        <Interactable.View
          snapPoints={[{x: 0, y: 0}, {y: -350}]}
          style={styles.circle} />
      </View>
    )
  }
}
