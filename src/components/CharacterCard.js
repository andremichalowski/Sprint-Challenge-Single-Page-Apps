import React from "react";

import StyledCard from './StyledComponents';

export default function CharacterCard(props) {
  return (
    <StyledCard>
      <div key={props.id}>

        <h1>{props.character.name}</h1>
        <img src={props.character.image} alt='RickAndMortyCharacter'/> 
        <h3>Species: {props.character.species}</h3>
        <h3>Status: {props.character.status}</h3>
      </div>
    </StyledCard>
  );
}
