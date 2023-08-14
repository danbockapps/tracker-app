import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Login: FC = () => (
  <View style={styles.container}>
    <Text>Login</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Login
