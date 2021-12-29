
import { useEffect, useState } from 'react';
import './App.css';
import CountrySelector from './components/CountrySelector';
import apiVaccinesCovid from './utils/apiVaccinesCovid';
import VaccineShower from './components/VaccineShower';
import apiWorldwideCovid from './utils/apiWorldwideCovid';

function App() {
  
  useEffect(() =>{
    apiVaccinesCovid(setCountries, setVaccines, setCountryLength)
    apiWorldwideCovid(setCases, setTodayCases, setDeaths, setTodayDeaths);
  }, []);

  const [countries, setCountries] = useState('null');
  const[vaccines, setVaccines] = useState(0);
  const [countryLength, setCountryLength] = useState();
  const [countryIndex, setCountryIndex] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [todayDeaths, setTodayDeaths] = useState(0);
  const [cases, setCases] = useState(0);
  const [todayCases, setTodayCases] = useState(0);

  
  return (
    <>
    <div className='container'>
    <img src="https://img.icons8.com/external-becris-lineal-becris/50/000000/external-vaccine-coronavirus-becris-lineal-becris.png"/>
    <h1 className='title'>COVID-19 Vaccines Worldwide</h1>
    <CountrySelector arrayCountries={countries} setCountryIndex={setCountryIndex}/>  
    <VaccineShower country={countries} vaccines={vaccines} countryIndex={countryIndex}/>
    </div>
    </>
  );
}

export default App;
