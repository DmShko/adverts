import { useState } from 'react'; 

import Select from 'react-select';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import se from './Search.module.scss';

const car = [
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
  
  const optionsBrand = [...car.map(element => ({ value: element, label: element }))];
 

  const prices = () => { 
    
    let optionsPrice = [];

    for(let i=10; i <= 100; i += 10) {
      optionsPrice.push({ value: i, label: i });
    };

    return optionsPrice;

  };

  const [selectedCarOption, setSelectedCarOption] = useState(null);
  const [selectedPriceOption, setSelectedPriceOption] = useState(null);

  // create 'formik' hook and configurate him
  const formik = useFormik({
    initialValues: {
      from: '',
      to: '',
    },

    //yup stored own validate functions (for email, password...etc)
    validationSchema: Yup.object({
      from: Yup.number().notRequired().min(1000).max(1000000),
      to: Yup.number().notRequired().min(1000).max(1000000),
    }),

    //! 'values' contains ended values all Form inputs.
    //! They will can get: 'values.<field name>' or change values on {email, password}
    onSubmit: ({ from, to }) => {
      console.log(from, to);
    },
  });

  return (
    <div className={se.container}>
      <label htmlFor='brand'>Car brand</label>
      <Select
        id='brand'
        value={selectedCarOption}
        onChange={setSelectedCarOption}
        options={optionsBrand}
        placeholder='Enter the text' 
      />

      <label htmlFor='price'>Price/ 1 hour</label>
      <Select
        id='price'
        value={selectedPriceOption}
        onChange={setSelectedPriceOption}
        options={prices()}
        placeholder='To $'
      />

      <form onSubmit={formik.handleSubmit}>

        <p>Car mileage/ km</p>

        <input
          name="from"
          type="text"
          placeholder="From"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        >
          
        </input>
  
        <input
          name="to"
          type="text"
          placeholder="To"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        >
          
        </input>

        <button
          type="submit"
        >
          Search
        </button>

      </form>
    </div>
  )
}

export default Search