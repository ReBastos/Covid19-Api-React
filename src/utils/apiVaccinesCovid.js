const apiVaccinesCovid = async (setCountries, setVaccines,setCountriesLength) => {

    const response = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1');
    const countriesJson = await response.json();
    
    const arrayCountries = [];
    const objectVaccines = [];
    const arrayVaccines = [];
    for (let index = 0; index < countriesJson.length; index++) {
      arrayCountries.push(countriesJson[index].country);
      objectVaccines.push(countriesJson[index].timeline);
      arrayVaccines.push(objectVaccines[index][Object.keys(objectVaccines[0])[0]])

    }

    //console.log(arrayVaccines[0][Object.keys(arrayVaccines[0])[0]]);
    setCountries(arrayCountries);
    setVaccines(arrayVaccines);
    setCountriesLength(arrayCountries.length);
    
}

export default apiVaccinesCovid;