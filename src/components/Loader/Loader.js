
import { useSpring, animated } from '@react-spring/web'

import {ReactComponent as LinesImg} from '../../images/line-horizontal-3-svgrepo-com.svg'

import lo from './Loader.module.scss'

const Loader = () => {

  const props = useSpring({
    loop: true,
    from: { transform: 'translateX(30px)', opacity: '1', },
    to: [{ transform: 'translateX(0)', opacity: '0',}, { transform: 'translateX(30px)', opacity: '1',}],
    config: {
        duration: 70,
    },
  })

  return (
      <div className={lo.container} >
          <animated.div style={props}>

             <LinesImg />

          </animated.div>
      </div>  
  )
}

export default Loader