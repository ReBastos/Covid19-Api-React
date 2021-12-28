
const CountrySelector = ({arrayCountries}) => {

    if(arrayCountries.length === 217) {
        return(
            <>
            <select>
            {arrayCountries.map((x, y) => {
                console.log(y)
               return <option key={y}>{x}</option>
            }

            )}    
            <option>Teste</option>
            </select>
            </>
        )
    } else {
        return null
    }
}

export default CountrySelector;