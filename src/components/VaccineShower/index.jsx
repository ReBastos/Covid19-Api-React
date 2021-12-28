import { useState } from "react";

const VaccineShower = ({country, vaccines, countryIndex}) => {

    const [numberVaccines, setNumberVaccines] = useState(0);


    for (let index = 0; index < vaccines[countryIndex]; index++) {
        setTimeout(() => {
            setNumberVaccines(index);
            console.log(numberVaccines);
        }, 3000);
        
        
    }

    if(country.length === 217) {
   
    return(
        <>
        <h2>{country[countryIndex]}</h2>
        <div>{numberVaccines}</div>
        </>
    )} else {
        return null
    }

}

export default VaccineShower;