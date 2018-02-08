import {StyleSheet} from 'react-native'
import {width} from '../libs/Dimensions'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tinyCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#06a0dc'
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#06a0dc'
  },
  square: {
    width: 150,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#06a0dc'
  },
  bar: {
    width: width,
    height: 60,
    backgroundColor: '#06a0dc'
  },
  buttonsWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    width: '60%',
    margin: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#333333",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    color: '#ffffff'
  }
})
