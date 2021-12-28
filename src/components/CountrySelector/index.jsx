
const CountrySelector = ({arrayVaccine}) => {

    

    return(
        <>
        <select>
            {arrayVaccine.map((x, y) => {
                console.log(x);
               return <option key={y}>{x}</option>
            }

            )}
            <option>Teste</option>
        </select>;
        </>
    )
}


export default CountrySelector;