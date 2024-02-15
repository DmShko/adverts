import ci from './CarItem.module.scss';

const CarItem = ({ data }) => {
  
  return (
    <>
      <div className={ci.itemContainer}>
        <img alt='car foto' src={`${data.img}`}></img>
        

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
       

        <button><p>Learn more</p></button>
      </div>

    </>
  )
}

export default CarItem