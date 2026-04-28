import Lottie from 'react-lottie'
// import Lottie from 'lottie-react'
import busLotties from './busLotties.json'

function LottieOnce() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: busLotties,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Lottie options={defaultOptions} height={300} width={300} />
  )
}
export default LottieOnce
