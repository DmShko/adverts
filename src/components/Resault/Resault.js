import { useState, useEffect } from 'react'; 

import { useDispatch, useSelector } from 'react-redux'; 

import { getAdverts } from '../../API/advertsAPI'

import { nanoid } from 'nanoid';

import CarsItem from './CarItem/CarItem'

import { ReactComponent as CarImg} from '../../images/car-transport-svgrepo-com.svg';

import re from './Resault.module.scss';

const Resault = () => {

  const dispatch = useDispatch();

  const advertsSelector = useSelector(state => state.adverts);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    
    dispatch(getAdverts(currentPage));

  },[dispatch, currentPage]);

  const loadAdverts = () => {
 
    advertsSelector.cars.length !== 1 
    ? setCurrentPage(value => value += 1)
    : setCurrentPage(1);
   
  };

  return (

    <>
      {advertsSelector.isLoading ? <CarImg style={{width: '70px'}}/> :<div className={re.carsContainer}>
        <ul className={re.carsList}>
          {advertsSelector.cars.map(element => {
            return advertsSelector.search.brand !== 'All' ? (element.make === advertsSelector.search.brand 
            && Number(element.rentalPrice.slice(1)) <= Number(advertsSelector.search.price.slice(1))) 
            || (Number(advertsSelector.search.from) <= Number(element.mileage) <= Number(advertsSelector.search.to))
            ? <li className={re.carItem} key={nanoid()} id={element.id}>

              <CarsItem data={element}/>  

            </li> : '' 
            : <li className={re.carItem} key={nanoid()} id={element.id}>

              <CarsItem data={element}/>  

            </li>
            })}
        </ul>
      </div>}

      <button className={re.loadbutton} type='button' onClick={loadAdverts}>Load more</button>
    </>

  )
}

export default Resault