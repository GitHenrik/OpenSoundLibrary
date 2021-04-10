import { useState, useEffect } from 'react'

/**
 * Returns current screen size from window object
 * @returns {Object} Object containing current screen width and height
 */
const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    document.addEventListener('resize', refreshSize)
    refreshSize()
    return () => document.removeEventListener('resize', refreshSize)
  }, [])

  const refreshSize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  return size
}

export default useWindowSize
