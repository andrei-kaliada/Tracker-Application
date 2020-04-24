import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import { fetchCountries } from '../../api/index';

import styles from './CountryPicker.module.css';

export default function CountryPicker({handleCountryChange}) {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const getCountries = async () => {
            setCountries(await fetchCountries());
        }

        getCountries();
       
    },[setCountries]);

   

    return (
        <div>
            
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(event)=> handleCountryChange(event.target.value)} >
                    <option value="">Global</option>
                    { countries.map( (item, index) => 
                    <option 
                        key={index} 
                        value={item}>{item}</option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
