import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'

export default function TrackListScreen({ navigation }) {
  return (
    <>
      <Text stlye={{ fontSize: 48 }}>Track List</Text>
      <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')} />
    </>
  )
}

const styles = StyleSheet.create({})
