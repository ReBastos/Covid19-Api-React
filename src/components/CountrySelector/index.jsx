
const CountrySelector = ({arrayCountries}) => {

    if(arrayCountries.length === 217) {
        
        
        return(
            <>
            <select>
            {arrayCountries.map((x, y) => {
               return <option key={y}>{x}</option>
            }

            )}    
            </select>
            </>
        )
    } else {
        return null
    }
}

export default CountrySelector;