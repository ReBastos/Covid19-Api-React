import { useState } from "react";
import './index.css'

const VaccineShower = ({country, vaccines, countryIndex}) => {  

    const [numberVaccines, setNumberVaccines] = useState(0);

    if(country.length === 217) {
   
    return(
        <>
        <div className="result">
        <h2>{country[countryIndex]}</h2>
        <p>{vaccines[countryIndex]}</p>
        </div>
        </>
    )} else {
        return null
    }

}

export default VaccineShower;