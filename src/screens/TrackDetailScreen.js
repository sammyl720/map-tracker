import React, { useContext } from 'react'
import { Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'
export default function TrackDetailScreen({ navigation }) {
  const { state } = useContext(TrackContext)
  const id = navigation.getParam('id')

  const track = state.find((t) => t._id === id)
  const initialCoords = track.locations[0].coords
  return (
    <>
      <Text style={{ marginVertical: 10, alignSelf: 'center' }} h2> { track.name} </Text>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  )
}

