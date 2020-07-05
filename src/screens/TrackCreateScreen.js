import React, { useContext, useCallback } from 'react'
import { Context as LocationContext } from '../context/LocationContext'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigationFocus, SafeAreaView } from 'react-navigation'
import useLocation from '../hooks/useLocation'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import { FontAwesome } from '@expo/vector-icons'; 

// import '../_mockLocation' // fake moving

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state: { recording } } = useContext(LocationContext)
  const callback = useCallback((location) => {
    addLocation(location, recording)
  }, [recording])
  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ marginVertical: 10, alignSelf: 'center' }} h2>Create a Track</Text>
      <Map />
      { err ? <Text>Pleasse enable location services </Text> : null }
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: () => <FontAwesome name="plus" size={20} color="black" />
}

export default withNavigationFocus(TrackCreateScreen)
// const styles = StyleSheet.create({})
