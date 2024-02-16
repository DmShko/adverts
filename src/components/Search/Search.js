import { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 

import Select from 'react-select';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { change } from 'store/advertsSlice'; 

import se from './Search.module.scss';

const car = [
  "All",
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land"
];

const Search = () => {
  // selectors state
  const [selectedCarOption, setSelectedCarOption] = useState(null);
  const [selectedPriceOption, setSelectedPriceOption] = useState(null);

  const [firstControlClick, setFirstControlClick] = useState(false);
  const [secondControlClick, setSecondControlClick] = useState(false);

  const dispatch = useDispatch();
  
  // react-select options
  const optionsBrand = [...car.map(element => ({ value: element, label: element }))];
 
  // react-select styles
  const customStyles = (name) => { 
    
    return {
      control: () => ({
        display: 'flex',
        justifyContent: 'space-between',
        border: 'none',
        borderRadius: '14px',
        backgroundColor: 'rgba(247, 247, 251, 1)',
        outline: 'none',
      }),
      indicatorSeparator: (defaultStyles) => ({
        ...defaultStyles,
        color: 'red',
        background: 'none',
      }),
      placeholder: (defaultStyles) => ({
        ...defaultStyles,
        color: 'var(--text-control)',
        fontFamily: 'Manrope',
        fontSize: '18px',
        fontWeight: '500',
      }),
      indicatorsContainer: (defaultStyles) => 
      ({
        ...defaultStyles,
        transform: name === 'brand' ? firstControlClick ?  'rotate(180deg)' : 'rotate(0)'
          : secondControlClick ?  'rotate(180deg)' : 'rotate(0)',
      }),
    }
  };

  const prices = () => { 
    
    let optionsPrice = [];

    for(let i=10; i <= 100; i += 10) {
      optionsPrice.push({ value: i, label: i });
    };

    return optionsPrice;

  };

  // create 'formik' hook and configurate him
  const formik = useFormik({
    initialValues: {
      from: '',
      to: '',
    },

    //yup stored own validate functions (for email, password...etc)
    validationSchema: Yup.object({
      from: Yup.number().notRequired(),
      to: Yup.number().notRequired(),
    }),

    //! 'values' contains ended values all Form inputs.
    //! They will can get: 'values.<field name>' or change values on {email, password}
    onSubmit: ({ from, to }) => {

      if(selectedPriceOption !== null) dispatch(change({operation: 'changeSearch', data: {brand: selectedCarOption.value, price: selectedPriceOption.value, from: from, to: to,},}));

    },
  });

  const clickSelect = (name) => {
    name === 'brand' ? setFirstControlClick(value => !value) : setSecondControlClick(value => !value);
  };

  return (
    <div className={se.container}>

      <div className={se.select}>
        <label htmlFor='brand'>Car brand</label>
        <Select
        
          className={se.brand}
          classNamePrefix="react-select"
          id='brand'
          value={selectedCarOption}
          onChange={setSelectedCarOption}
          options={optionsBrand}
          styles={customStyles('brand')}
          placeholder='Enter the text' 

          onMenuOpen={() => clickSelect('brand')}
          onMenuClose={() => clickSelect('brand')}
        
        />
      </div>

      <div className={se.select}>
        <label htmlFor='price'>Price/ 1 hour</label>
        <Select
          className={se.price}
          id='price'
          value={selectedPriceOption}
          onChange={setSelectedPriceOption}
          options={prices()}
          styles={customStyles('price')}
          placeholder='To $'

          onMenuOpen={() => clickSelect('price')}
          onMenuClose={() => clickSelect('price')}
        />
      </div>

      <div className={se.mileagesBlock}>
        <p>Car mileage/ km</p>
        <form className={se.form} onSubmit={formik.handleSubmit}>

          <div className={se.mileage}>

            <label className={`${se.leftLabel} ${se.right}`}> 
              <p>From</p>
              <input
                name="from"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.from}
              > 
              </input>
            </label>
      
            <label>
              <p>To</p>
              <input
                name="to"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.to}
              >
              </input>
            </label>
            
          </div>

          <button
              type="submit"
            >
              Search
          </button>

        </form>
      </div>
    </div>
  )
}

export default Search