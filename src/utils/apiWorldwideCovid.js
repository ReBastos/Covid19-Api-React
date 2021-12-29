const apiWorldwideCovid = async (setCases, setTodayCases, setDeaths, setTodayDeaths) => {

    const data = await fetch('https://disease.sh/v3/covid-19/all');
    const dataJson = await data.json();

    console.log(dataJson);
    setDeaths(dataJson.deaths);
    setTodayDeaths(dataJson.todayDeaths);
    setCases(dataJson.cases);
    setTodayCases(dataJson.todayCases);
   
} 

export default apiWorldwideCovid;