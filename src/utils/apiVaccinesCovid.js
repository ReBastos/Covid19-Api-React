const apiVaccinesCovid = async (setVaccines) => {

    const response = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1');
    const vaccineJson = await response.json();

    const array = [];
    for (let index = 0; index < vaccineJson.length; index++) {
      
      array.push(vaccineJson[index].country);
      
    }

    setVaccines(array);
}

export default apiVaccinesCovid;