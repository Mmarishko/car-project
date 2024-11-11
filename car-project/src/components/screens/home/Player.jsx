import { useRef } from "react"

const Player = () => {

  const ref = useRef()

  const handlePlay = () => {
    ref.current.play()
  }
  const handlePause = () => {
    ref.current.pause()
  }

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <video
        src='https://youtu.be/3KtWfp0UopM'
        ref={ref}
        width="879"
        height="494"
      ></video>
    </div>
  )
}

export default Player