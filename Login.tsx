import { FC, useState } from 'react'
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'

const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        autoComplete='email'
        autoCapitalize='none'
        keyboardType='email-address'
        style={styles.textInput}
        placeholder='E-mail'
        placeholderTextColor='#ccc'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        autoComplete='password'
        autoCapitalize='none'
        style={styles.textInput}
        placeholder='Password'
        placeholderTextColor='#ccc'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
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
    backgroundColor: '#f099ff',
  },
})

export default Login
