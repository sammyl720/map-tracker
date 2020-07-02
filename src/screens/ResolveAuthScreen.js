import { useEffect, useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'
export default function ResolveAuthScreen() {
  const { tryLocalSignin } = useContext(AuthContext)
  useEffect(() => {
    tryLocalSignin()
  }, [])
  return null
}
