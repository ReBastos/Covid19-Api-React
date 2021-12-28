
import { useState } from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';
import apiVaccinesCovid from './utils/apiVaccinesCovid';

function App() {

  const [countries, setCountries] = useState('null');
  const[vaccines, setVaccines] = useState(0);

  
  return (
    <>
    <h1>Teste</h1>
    <button onClick={() => { 
      apiVaccinesCovid(setCountries);
      console.log(countries);
      }}>Chamar API</button>
    
    <CountrySelector arrayCountries={countries}/>
    </>
  );
}

export default App;
