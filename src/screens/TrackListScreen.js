import React, { useContext } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem, Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'


const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('TrackDetail', { id: item._id })
            }}>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

export default TrackListScreen
