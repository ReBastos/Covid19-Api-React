const countVaccineNumber = (vaccineNumber, setNumberVaccines) => {

    let counter = 0;
    for (let index = 0; index < vaccineNumber; index++) {
        counter += 100000;
        
    }
    setNumberVaccines(counter);
}

export default countVaccineNumber;