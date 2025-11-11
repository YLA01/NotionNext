import { useEffect, useState } from 'react'

interface WindowSize {
  width: number,
  height: number
}

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  useEffect(() => {
    const onResize = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
    onResize()
    windows.addEventListener('resize', onResize)
    return () => {
      windows.removeEventListener('resize', onResize)
    }
  }, [])
  return size
}

export default useWindowSize
