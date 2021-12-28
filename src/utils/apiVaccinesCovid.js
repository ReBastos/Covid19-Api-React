const apiVaccinesCovid = async (setCountries, setVaccines) => {

    const response = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1');
    const countriesJson = await response.json();
    
    const arrayCountries = [];
    const arrayVaccines = [];
    for (let index = 0; index < countriesJson.length; index++) {
      
      arrayCountries.push(countriesJson[index].country);
      
      
    }

    setCountries(arrayCountries);
}

export default apiVaccinesCovid;