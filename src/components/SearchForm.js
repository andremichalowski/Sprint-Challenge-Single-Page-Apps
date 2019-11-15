import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function SearchForm() {

  const [currentForm, changeForm] = useState('');
  const [searchResult, submitResult] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        const characters = res.data.results;
        const results = characters.filter(character => {
          return character.name.toLowerCase().includes(currentForm.toLowerCase());
        })
        submitResult(results);
      })
      .catch(err => {
        console.log(err);
      })
  }, [currentForm]);

  const onFormChange = event => {
    changeForm(event.target.value);
    console.log(currentForm);
  }
 
  return (
    <section className="search-form">
    <h2>Search!</h2>
     <form>
        <input
          type='text'
          placeholder='Search'
          onChange={onFormChange}
        />
        {
          searchResult.map((character, index) => {
            return (
              <CharacterCard key={index} character={character} />
            )
          })
        }
    </form>
    </section>
  );
}
