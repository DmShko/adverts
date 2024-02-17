import { useState } from 'react';  
import { useSelector, useDispatch } from 'react-redux';

import { change } from 'store/advertsSlice'; 
import Modal from '../../Modal/Modal';

import { ReactComponent as HeartImg } from '../../../images/heart-svgrepo-com.svg';
import { ReactComponent as HeartImgFavorite } from '../../../images/heart-svgrepo-com-favorite.svg';

import ci from './CarItem.module.scss';

const CarItem = ({ data }) => {

  const advertsSelector = useSelector(state => state.adverts);
  const dispatch = useDispatch();

  const [modalToggle, setModalToggle] = useState(false); 

  // check car is favorite
  const isFavorite = (element) => {
    return advertsSelector.favorites.includes(element.toString())
  };

  const mouseMoveHandler = (evt) => {

    if(!isFavorite(evt.currentTarget.id)) {
      evt.target.style.fill = 'rgba(52, 112, 255, 1)';
      evt.target.style.stroke = 'rgba(52, 112, 255, 1)';
    
      evt.target.style.transition = 'fill 200ms, stroke 200ms';
    } 
    
  };

  const mouseOutHandler = (evt) => {

    if(!isFavorite(evt.currentTarget.id)) {
      evt.target.style.stroke = 'rgba(255, 255, 255, 1)';
      evt.target.style.fill = 'transparent';
    }

  };

  const mouseClickHandle = (evt) => {

    if(!isFavorite(evt.currentTarget.id)){
      dispatch(change({operation: 'addFavorites', data: evt.currentTarget.id,}));
    } else {
      dispatch(change({operation: 'deleteFavorites', data: evt.currentTarget.id,}));
    };

  };

  const ModalDrive = () => {

    // open/close modal window
    setModalToggle(value => !value);
    
  };

  return (
    <>
      {
        modalToggle && <Modal openClose={ModalDrive} data={data}/>
      }

      <div className={ci.itemContainer}>

        <div className={ci.itemImage} style={{backgroundImage: `url(${data.img})`}}>
          {isFavorite(data.id) 
            ? <HeartImgFavorite className={ci.itemHeart} id={data.id} onClick={mouseClickHandle} onMouseMove={mouseMoveHandler} onMouseOut={mouseOutHandler}/>
            : <HeartImg className={ci.itemHeart} id={data.id} onClick={mouseClickHandle} onMouseMove={mouseMoveHandler} onMouseOut={mouseOutHandler}/>}
        </div>
        
        <div className={ci.title}>
            <p>
                {`${data.make} `}
                <span className={ci.modelText}>{`${data.model}, `}</span>
                {data.year}
            </p>
            <p>
                {data.rentalPrice}
            </p>
        </div>

        
        <p className={ci.textSupport}>
            {data.address.split(',')[1]} <span className={ci.slash}> | </span>
            {data.address.split(',')[2]} <span className={ci.slash}> | </span>
            {data.rentalCompany} <span className={ci.slash}> | </span>
            {data.type} <span className={ci.slash}> | </span>
            {data.make} <span className={ci.slash}> | </span>
            {data.id} <span className={ci.slash}> | </span>
            {data.accessories[2]}
        </p>
       

        <button onClick={ModalDrive}><p>Learn more</p></button>
      </div>

    </>
  )
}

export default CarItem