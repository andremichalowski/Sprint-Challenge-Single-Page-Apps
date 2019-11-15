import React, { useEffect, useState } from "react";

import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [characters, changeCharacters] = useState([]);

  useEffect(() => {
    axios 
      .get ('https://rickandmortyapi.com/api/character/')
      .then ( res => {
        console.log(res.data.results);
        changeCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
    }, []);

  return (
    <section className="character-list">
      <h2>Wub a lub a dub dub characters.</h2>
      {
        characters.map((character, index) => {
          return(
            <CharacterCard key={index} character={character} />
          )
        })
      }
    </section>
  );
}