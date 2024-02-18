import { React, useEffect }from 'react'
import { nanoid } from 'nanoid'; 

import mo from './Modal.module.scss'

import { ReactComponent as CloseImg} from '../../images/close-md-svgrepo-com.svg';

const Modal = ({ openClose, data }) => {

  useEffect(() => {

    // add listener for close windows
    componentMount();
    return () => {
        window.removeEventListener('keydown', driveModal);
        document.body.style.overflow = 'scroll'
    };
    // eslint-disable-next-line
  }, []);

  // close modal window by 'Escape'
  const driveModal = evt => {
    if (evt.code === 'Escape') openClose();
  };

  function componentMount() {
    window.addEventListener('keydown', driveModal);
    document.body.style.overflow = 'hidden'
  };

  // close modal window by click on backdrob
  const clickBackdrob = (evt) => {

    if (evt.target === evt.currentTarget) openClose();
    
  };

  // close modal window by click on close button
  const clickCloseButton = () => {

    openClose();
    
  };

  return (
    <div className={mo.backdrop} style={{top: `${window.scrollY}px`,}} onClick={clickBackdrob}>
        <div className={mo.container}>

            <div className={mo.closeImgContainer} onClick={clickCloseButton}>
                <CloseImg className={mo.closeImg}/>
            </div>

            <div className={mo.imageContainer}>
                <img src={data.img} alt=''></img>
            </div>

            <div className={mo.infoBlock}>

                <div className={mo.title}>
                    <p>
                        {`${data.make} `}
                        <span className={mo.modelText}>{`${data.model}, `}</span>
                        {data.year}
                    </p>
                </div>

                <p className={mo.textSupport}>
                    {data.address.split(',')[1]} <span className={mo.slash}> | </span>
                    {data.address.split(',')[2]} <span className={mo.slash}> | </span>
                    id: {data.id} <span className={mo.slash}> | </span>
                    Year: {data.year} <span className={mo.slash}> | </span> 
                    Type: {data.type} <span className={mo.slash}> | </span>
                    Fuel Consumption: {data.fuelConsumption} <span className={mo.slash}> | </span>
                    Engine Size: {data.engineSize} <span className={mo.slash}> | </span>
                </p>

                <p className={mo.description}>{data.description}</p>

                <h2>Accessories and functionalities:</h2>

                <p className={mo.accessories}>
                    {data.accessories[0]} <span className={mo.slash}> | </span>
                    {data.accessories[1]} <span className={mo.slash}> | </span>
                    {data.accessories[2]} <span className={mo.slash}> | </span>         
                </p>

                <h2>Rental Conditions:</h2>

                <div className={mo.rentalConditions}>

                   { data.rentalConditions.split(/\r?\n/).map(element => 
                     {return element.includes(':') ? <p key={nanoid()} className={mo.conditions}>{element.split(':')[0]}:<span className={mo.accentText}>{element.split(':')[1]}</span></p> : <p key={nanoid()} className={mo.conditions}>{element}</p>}
                   )}

                   <p className={mo.conditions}>Mileage: <span className={mo.accentText}>{data.mileage}</span></p>
                   <p className={mo.conditions}>Price: <span className={mo.accentText}>{`${data.rentalPrice.slice(1)}$`}</span></p>

                </div>

                <button><p>Rental car</p></button>

            </div>
                
        </div>
    </div>
  )
}

export default Modal