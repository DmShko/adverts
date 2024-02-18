import { useEffect } from 'react'; 
import { useSelector } from 'react-redux'; 

import { nanoid } from 'nanoid';

import CarsItem from '../Resault/CarItem/CarItem';

import {ReactComponent as EmptyImg} from '../../images/box-empty-svgrepo-com.svg';

import fe from './Favorite.module.scss';

const Favorite = () => {

  const advertsSelector = useSelector(state => state.adverts);

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  return (

    <>
      <div className={fe.carsContainer}>
      {advertsSelector.favorites !== undefined && advertsSelector.favorites.length !== 0 ? 
        <ul className={fe.carsList}>
          {advertsSelector.cars.map(element => {
            return advertsSelector.favorites.includes(element.id.toString()) ? 
              
              <li className={fe.carItem} key={nanoid()} id={element.id}>
                
                <CarsItem data={element}/>  

              </li> : ''
           
          }) }
        </ul> 
        : <div className={fe.empty}><EmptyImg style={{width: '100px', height: '100px',}}/></div>}
      </div>
    </>

  )
}

export default Favorite