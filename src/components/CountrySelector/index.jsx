
const CountrySelector = ({arrayCountries, setCountryIndex}) => {

    const setProps = (evt) => {
        console.log(evt);
        console.log(evt.target.value);
        setCountryIndex(evt.target.value);

    }

    if(arrayCountries.length === 217) {
        
        return(
            <>
            <select onChange={setProps}>
            {arrayCountries.map((x, y) => {
               return <option key={y} value={y}>{x}</option>
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