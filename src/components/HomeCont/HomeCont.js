import { useNavigate } from 'react-router-dom'; 

import {ReactComponent as KeyImg} from '../../images/home/house-key-key-svgrepo-com.svg';
import {ReactComponent as SelectImg} from '../../images/home/tap-hands-and-gestures-svgrepo-com.svg';

import ho from './HomeCont.module.scss';

const Home = () => {

  const navigate = useNavigate();

  const clickHandler = () => {

    navigate('/catalog');
    
  };

  return (
    <div className={ho.container}>

        <div className={ho.select}>
          <p>Сhoose a car</p>
          <SelectImg style={{width: '200px', height: '200px'}}/>
        </div>

        <div className={ho.start}>
          <p onClick={clickHandler}>Let's start</p>
        </div>

        <div className={ho.keys}>
          <p>Get the keys</p>
          <KeyImg style={{width: '200px', height: '200px'}}/>
        </div>
    </div>
  )
}

export default Home