import React from "react";

import StyledCard from './StyledComponents';

export default function EpisodeCard(props) {
  return (
    <StyledCard>
      <div key={props.id}>

        <h1>{props.episode.name}</h1>
        <h3> Air Date: {props.episode.air_date} </h3> 
        <h3>Type: {props.episode.created}</h3>
        
      </div>
    </StyledCard>
  );
}