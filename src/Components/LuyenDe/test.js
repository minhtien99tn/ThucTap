import React from 'react'
import { FormControl , InputLabel, NativeSelect} from '@material-ui/core';

export default function test(value, handleOnChange, countries) {
    return (
        <FormControl>
            <InputLabel htmlFor =" counstry-selector" shrink > Quốc Gia</InputLabel>
            <NativeSelect value  ={value}
            onChange={handleOnChange}
            inputProps = {{
                name:'country', 
                id:'counstry-selector'
            }}>
                {countries.map((country)=>{
                    return <option value ={country.ISO2.toLowerCase}>{country.Country} </option>
                }) 
             }
         

          </NativeSelect>
           
            
        </FormControl>
    )
}

