import React, { useEffect, useState } from "react";

import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationList() {
  const [location, changeLocation] = useState([]);

  useEffect(() => {
    axios 
      .get ('https://rickandmortyapi.com/api/location/')
      .then ( res => {
        console.log(res.data.results);
        changeLocation(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
    }, []);

  return (
    <section className="character-list">
      <h2>Wub a lub a dub dub locations.</h2>
      {
        location.map((location, index) => {
          return(
            <LocationCard key={index} location={location} />
          )
        })
      }
    </section>
  );
}