import React, {useContext } from 'react'
import { Context as LocationContext } from '../context/LocationContext'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigationFocus, SafeAreaView } from 'react-navigation'
import useLocation from '../hooks/useLocation'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'

// import '../_mockLocation' // fake moving

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state: { recording } } = useContext(LocationContext)
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, recording)
  })
  // console.log(isFocused)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      { err ? <Text>Pleasse enable location services </Text> : null }
      <TrackForm />
    </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen)
// const styles = StyleSheet.create({})
