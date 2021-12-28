
import { useState } from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';
import apiVaccinesCovid from './utils/apiVaccinesCovid';

function App() {

  const [vaccines, setVaccines] = useState('null');

  
  return (
    <>
    <h1>Teste</h1>
    <button onClick={() => { 
      apiVaccinesCovid(setVaccines);
      console.log(vaccines);
      }}>Chamar API</button>
    
    <CountrySelector arrayCountries={vaccines}/>
    </>
  );
}

export default App;
