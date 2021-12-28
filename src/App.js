
import { useEffect, useState } from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';
import apiVaccinesCovid from './utils/apiVaccinesCovid';
import VaccineShower from './components/VaccineShower';

function App() {
  
  useEffect(() =>{
    apiVaccinesCovid(setCountries, setVaccines, setCountryLength)
  }, []);

  const [countries, setCountries] = useState('null');
  const[vaccines, setVaccines] = useState(0);
  const [countryLength, setCountryLength] = useState();
  const [countryIndex, setCountryIndex] = useState(0);

  
  return (
    <>
    <h1>Teste</h1>
    <button onClick={() => { 
      console.log(countries);
      console.log(`No país ${countries[0]}, foram vacinadas ${vaccines[0][Object.keys(vaccines[0])]} pessoas`);
      }}>Chamar API</button>
    
    <CountrySelector arrayCountries={countries} setCountryIndex={setCountryIndex}/>
    <VaccineShower country={countries} vaccines={vaccines} countryIndex={countryIndex}/>
    </>
  );
}

export default App;
