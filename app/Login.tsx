import { FC, useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { AppContext } from './appContext'
import colors from './colors'

const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const ctx = useContext(AppContext)

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
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          fetch('https://bock.esmmweighless.com/tracker/rest/api.php?q=login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
          })
            .then(res => console.log('login', new Date(), res.status))
            .then(() =>
              fetch('https://bock.esmmweighless.com/tracker/rest/api.php?q=reports')
                .then(res => {
                  console.log('reports', new Date(), res.status)
                  return res.json()
                })
                .then(responseData => ctx.setReports(responseData.data)),
            )
        }
      >
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
    backgroundColor: colors.purple,
  },
})

export default Login
