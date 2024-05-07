import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  
  const [visitedFlags, setVisitedFlags] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    console.log(country);
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  const handleVisitedFlags = flag => {
    const newVisitedFlags = [...visitedFlags, flag] 
    setVisitedFlags(newVisitedFlags)
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country */}
      <div>
        <h4>Visited Countries: {visitedCountry.length}</h4>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
          {
            visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
          }
      </div>

      {/* display country */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
