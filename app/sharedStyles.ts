import { StyleSheet } from 'react-native'
import colors from './colors'

const sharedStyles = StyleSheet.create({
  textInput: {
    height: 50,
    marginHorizontal: 30,
    marginBottom: 30,
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 30,
    marginBottom: 30,
    backgroundColor: colors.purple,
  },
})

export default sharedStyles
