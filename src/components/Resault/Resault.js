import { useState, useEffect } from 'react'; 

import { useDispatch, useSelector } from 'react-redux'; 

import { getAdverts } from '../../API/advertsAPI'

import { nanoid } from 'nanoid';

import CarsItem from './CarItem/CarItem'

import re from './Resault.module.scss';

const Resault = () => {

  const dispatch = useDispatch();

  const advertsSelector = useSelector(state => state.adverts);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    
    dispatch(getAdverts(currentPage));

  },[dispatch, currentPage]);

  const loadAdverts = () => {
 
    advertsSelector.cars.length !== 0 
    ? setCurrentPage(value => value += 1)
    : setCurrentPage(1);
   
  };

  return (

    <>
      <div className={re.carsContainer}>
        <ul className={re.carsList}>
          {advertsSelector.cars.map(element => {
            return <li className={re.carItem} key={nanoid()} id={element.id}>

              <CarsItem data={element}/>  

            </li>})}
        </ul>
      </div>

      <button type='button' onClick={loadAdverts}>Load more</button>
    </>

  )
}

export default Resault