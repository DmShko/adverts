
import { useSelector } from 'react-redux'; 

import { nanoid } from 'nanoid';

import CarsItem from '../Resault/CarItem/CarItem';

import fe from './Favorite.module.scss';

const Favorite = () => {

  const advertsSelector = useSelector(state => state.adverts);

  return (

    <>
      <div className={fe.carsContainer}>
        <ul className={fe.carsList}>
          {advertsSelector.cars.map(element => {
            return advertsSelector.favorites.includes(element.id.toString()) ? 
              
              <li className={fe.carItem} key={nanoid()} id={element.id}>
                
                <CarsItem data={element}/>  

              </li> : ''
           
          })}
        </ul>
      </div>
    </>

  )
}

export default Favorite