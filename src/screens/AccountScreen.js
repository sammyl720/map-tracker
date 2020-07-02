import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'
import { Button } from 'react-native-elements'
export default function AccountScreen() {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title='Signout' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})
