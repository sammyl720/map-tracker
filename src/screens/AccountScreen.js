import React, { useContext } from 'react'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'
import { Button, Text } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'
const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', padding: 30 }} forceInset={{ top: 'always' }}>
      <Spacer>
        <Text h3>Account Settings</Text>
      </Spacer>
      <Spacer>
        <Button title='Signout' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: () => <FontAwesome name="gear" size={20} color="black" />
}
export default AccountScreen