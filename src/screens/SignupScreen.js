import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input 
        value={email} 
        onChangeText={setEmail}
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input 
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button title="Signup" />
      </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: () => false
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})
