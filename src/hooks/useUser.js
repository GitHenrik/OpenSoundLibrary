import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'

/**
 * Returns currently authenticated user or null, if not authenticated
 */
const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(e => {
        if (e === 'The user is not authenticated') {
          setUser(null)
          return
        }
        // Log errors, if any
        console.error(e)
      })
  }, [])

  return user
}

export default useUser
