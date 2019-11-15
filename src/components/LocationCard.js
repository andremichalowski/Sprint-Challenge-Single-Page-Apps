import React from "react";

import StyledCard from './StyledComponents';

export default function LocationCard(props) {
  return (
    <StyledCard>
      <div key={props.id}>

        <h1>{props.location.name}</h1>
        <img src={props.location.image} alt='Rick and Morty Locations'/> 
        <h3>Type: {props.location.type}</h3>
        <h3>Dimension: {props.location.dimension}</h3>
        <h3>Residents: {props.location.residents}</h3>
      </div>
    </StyledCard>
  );
}
