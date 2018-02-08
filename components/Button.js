import React, {PureComponent} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from '../libs/CommonStyles'

type Props = {
  text: string,
  onPress: Function
}
type State = {}

export default class Button extends PureComponent<Props, State> {
  state = {}

  render() {
    var {text, onPress} = this.props
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    )
  }
}
