import React, { useContext } from 'react'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import { Input, Button } from 'react-native-elements'

const TrackForm = () => {
  const { 
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations } } = useContext(LocationContext)
  console.log(locations.length)
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={(text) => changeName(text)}
          placeholder="Enter name" />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />) : 
          (<Button title="Start Recording" onPress={startRecording} />)}
      </Spacer>
    </>
  )
}

export default TrackForm //() => <Text>Test</Text>
