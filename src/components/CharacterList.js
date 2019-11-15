import React, { useEffect, useState } from "react";
import { Route, Link, NavLink } from 'react-router-dom';

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
      <h2>Wub a lub a dub dub just the characters.</h2>
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

{/* <container className="cnt1">
          <container className="containerA">
            <CharacterCard key={index} character={character} />
          </container>
    
          <container className="containerB">
            <NavLink exact to="/Search"className="homelinks"><h2>Search</h2></NavLink>
            <NavLink to="/Characters"className="homelinks"><h2>Characters</h2></NavLink>
          </container>
          
        </container> */}