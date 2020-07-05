import React, { useContext } from 'react'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import { Input, Button } from 'react-native-elements'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const { 
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations } } = useContext(LocationContext)
  // console.log(locations.length)
  const [saveTrack] = useSaveTrack()
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
      {
        !recording && locations.length ? (
          <Spacer>
            <Button title='Save Recording' onPress={saveTrack} />
          </Spacer>
        ) : null
      }
    </>
  )
}

export default TrackForm //() => <Text>Test</Text>
