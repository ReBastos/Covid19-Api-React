
import { useState } from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';

function App() {

  const [vaccines, setVaccines] = useState('null');
  const [arrayCountries, setArrayCountries] = useState();

  const search = async (evt) => {
    const response = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1');
    setVaccines(await response.json());
    
    const array = [];
    for (let index = 0; index < vaccines.length; index++) {
      
      array.push(vaccines[index].country);
      
    }

    setArrayCountries(array);
    console.log(arrayCountries);
    
  }


  
  return (
    <>
    <h1>Teste</h1>
    <button onClick={search}>Chamar API</button>
    <CountrySelector arrayVaccine={arrayCountries}/>
    
    </>
  );
}

export default App;
