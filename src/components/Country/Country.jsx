import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
    }

  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color: visited ? 'white': 'black'}}>Name: {name.common}</h3>
      <img style={{ width: 100 }} src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      <p>{visited ? 'i go their' : 'i want to go their'}</p>
    </div>
  );
};

export default Country;
